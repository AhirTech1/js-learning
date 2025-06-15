'use strict';
import { firebaseConfig } from "./config";

const btnOnline = document.querySelector('.btn3');

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Sound effects
const soundHold = new Audio('click.mp3');
const soundNew = new Audio('click2.mp3');
const soundDice = new Audio('dice.mp3');
const soundSuccess = new Audio('success.mp3');

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const modeSelect = document.querySelector('.mode-select');
let gameMode = 'local'; // default

let scores = [], currentScore, activePlayer, playing, isComputerGame;

const COMPUTER_HOLD_THRESHOLD = 15;

// Online multiplayer state
let currentRoomId = null;
let isRoomOwner = false;
let playerId = null;

// Fix 1: Modal visibility and close button
btnOnline.addEventListener('click', () => {
    modeSelect.style.display = 'none';
    document.getElementById('onlineModal').classList.remove('hidden');
});

// Close modal when clicking outside content
document.getElementById('onlineModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('onlineModal')) {
        closeOnlineModal();
    }
});

// Close modal with function
function closeOnlineModal() {
    document.getElementById('onlineModal').classList.add('hidden');
    modeSelect.style.display = 'flex';
    // Reset modal UI when closing
    document.getElementById('roomForm').classList.remove('hidden');
    document.getElementById('waitingRoom').classList.add('hidden');
}

// Close button handler
document.querySelector('.close').addEventListener('click', closeOnlineModal);

// Online button shows modal
btnOnline.addEventListener('click', () => {
    modeSelect.style.display = 'none';
    document.getElementById('onlineModal').classList.remove('hidden');
});

// Create room button
document.getElementById('createRoomBtn').addEventListener('click', () => {
    const roomId = document.getElementById('roomId').value;
    const password = document.getElementById('roomPassword').value;

    if (roomId && password) {
        createRoom(roomId, password);
        document.getElementById('roomForm').classList.add('hidden');
        document.getElementById('waitingRoom').classList.remove('hidden');
        document.getElementById('currentRoomId').textContent = roomId;
    } else {
        alert("Please enter both Room ID and Password");
    }
});

// Join room button
document.getElementById('joinRoomBtn').addEventListener('click', () => {
    const roomId = document.getElementById('roomId').value;
    const password = document.getElementById('roomPassword').value;

    if (roomId && password) {
        joinRoom(roomId, password);
        document.getElementById('roomForm').classList.add('hidden');
        document.getElementById('waitingRoom').classList.remove('hidden');
        document.getElementById('currentRoomId').textContent = roomId;
    } else {
        alert("Please enter both Room ID and Password");
    }
});

// Generate unique player ID
const generatePlayerId = () => {
    return 'player_' + Math.random().toString(36).substr(2, 9);
};

// Update player status UI
const updatePlayerStatus = (players) => {
    if (players.player1) {
        const statusEl = document.getElementById('player1-status');
        statusEl.textContent = players.player1.online ? '● Online' : '○ Offline';
        statusEl.className = players.player1.online ? 'online-status online' : 'online-status offline';
    }

    if (players.player2) {
        const statusEl = document.getElementById('player2-status');
        statusEl.textContent = players.player2.online ? '● Online' : '○ Offline';
        statusEl.className = players.player2.online ? 'online-status online' : 'online-status offline';
    }
};

// Room creation function
const createRoom = (roomId, password) => {
    isRoomOwner = true;
    currentRoomId = roomId;
    playerId = generatePlayerId();

    // Create room in database
    database.ref(`rooms/${roomId}`).set({
        password: password,
        players: {
            player1: {
                id: playerId,
                name: "Player 1",
                online: true
            },
            player2: null
        },
        gameState: null
    });

    // Update UI immediately
    updatePlayerStatus({
        player1: { online: true },
        player2: { online: false }
    });

    // Setup presence detection
    setupPresence();

    // Listen for player changes
    database.ref(`rooms/${roomId}/players`).on('value', (snapshot) => {
        const players = snapshot.val();
        if (players) {
            updatePlayerStatus(players);

            // Start game when both players are present
            if (players.player1 && players.player2 && players.player2.online) {
                startOnlineGame();
            }
        }
    });
};

//Join room function
const joinRoom = (roomId, password) => {
    database.ref(`rooms/${roomId}`).once('value').then((snapshot) => {
        const roomData = snapshot.val();
        if (!roomData) {
            alert("Room not found");
            resetOnlineUI();
            return;
        }

        if (roomData.password !== password) {
            alert("Incorrect password");
            resetOnlineUI();
            return;
        }

        if (roomData.players.player2 && roomData.players.player2.online) {
            alert("Room is full");
            resetOnlineUI();
            return;
        }

        currentRoomId = roomId;
        playerId = generatePlayerId();
        isRoomOwner = false;

        // Use transaction to safely join room
        const player2Ref = database.ref(`rooms/${roomId}/players/player2`);
        player2Ref.transaction((currentData) => {
            if (currentData === null || !currentData.online) {
                return {
                    id: playerId,
                    name: "Player 2",
                    online: true
                };
            }
            return currentData; // Abort if slot is taken
        }).then((result) => {
            if (result.committed) {
                setupPresence();
                startOnlineGame();
            } else {
                alert("Room is full");
                resetOnlineUI();
            }
        });
    }).catch((error) => {
        console.error("Join error:", error);
        alert(error.message.includes("permission")
            ? "Failed to join room (permission denied)"
            : "Error joining room");
        resetOnlineUI();
    });
};

// Reset online UI
const resetOnlineUI = () => {
    document.getElementById('roomForm').classList.remove('hidden');
    document.getElementById('waitingRoom').classList.add('hidden');
};

// Presence detection
const setupPresence = () => {
    const playerPath = isRoomOwner ? 'player1' : 'player2';
    const playerRef = database.ref(`rooms/${currentRoomId}/players/${playerPath}`);

    playerRef.onDisconnect().update({ online: false })
        .catch(e => console.error("Disconnect setup failed:", e));

    playerRef.update({ online: true })
        .catch(e => console.error("Presence update failed:", e));

    // Handle reconnections
    firebase.database().ref('.info/connected').on('value', (snapshot) => {
        if (snapshot.val() === true) {
            playerRef.update({ online: true });
        }
    });

    // Room cleanup for owner
    if (isRoomOwner) {
        database.ref(`rooms/${currentRoomId}/players`).on('value', (snapshot) => {
            const players = snapshot.val();
            if (players && players.player1 && !players.player1.online) {
                setTimeout(() => {
                    database.ref(`rooms/${currentRoomId}`).once('value').then(roomSnap => {
                        if (roomSnap.val()?.players?.player1 && !roomSnap.val().players.player1.online) {
                            database.ref(`rooms/${currentRoomId}`).remove();
                        }
                    });
                }, 10000);
            }
        });
    }
};

// Start online game
const startOnlineGame = () => {
    // Hide all modals
    document.getElementById('onlineModal').classList.add('hidden');
    modeSelect.style.display = 'none';

    // Setup online game
    setupOnlineMode();
    modifiedInit();

    // Listen for game state changes
    database.ref(`rooms/${currentRoomId}/gameState`).on('value', (snapshot) => {
        if (snapshot.exists()) {
            loadGameState(snapshot.val());
        }
    });
};

// Setup online mode
const setupOnlineMode = function() {
    // Remove existing event listeners
    btnRoll.removeEventListener('click', humanRoll);
    btnHold.removeEventListener('click', modifiedHold);
    btnNew.removeEventListener('click', newGame);

    // Set up online-specific listeners
    btnRoll.addEventListener('click', function() {
        if (!playing) return;

        const isActive = (isRoomOwner && activePlayer === 0) ||
            (!isRoomOwner && activePlayer === 1);
        if (!isActive) return;

        soundDice.play();
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            saveGameState();
        } else {
            modifiedSwitchPlayer();
        }
    });

    btnHold.addEventListener('click', function() {
        if (!playing) return;

        const isActive = (isRoomOwner && activePlayer === 0) ||
            (!isRoomOwner && activePlayer === 1);
        if (!isActive) return;

        modifiedHold();
    });

    btnNew.addEventListener('click', newGame);
};

// Save game state to database
const saveGameState = () => {
    if (!currentRoomId) return;

    const gameState = {
        scores: scores,
        currentScore: currentScore,
        activePlayer: activePlayer,
        playing: playing
    };

    database.ref(`rooms/${currentRoomId}/gameState`).set(gameState);
};

// Load game state from database
const loadGameState = (state) => {
    scores = state.scores || [0, 0];
    currentScore = state.currentScore || 0;
    activePlayer = state.activePlayer || 0;
    playing = state.playing !== undefined ? state.playing : true;

    // Update UI
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    current0El.textContent = activePlayer === 0 ? currentScore : 0;
    current1El.textContent = activePlayer === 1 ? currentScore : 0;

    // Update player classes
    player0El.classList.toggle('player--active', activePlayer === 0);
    player1El.classList.toggle('player--active', activePlayer === 1);

    // Update winner status
    if (scores[0] >= 100) {
        player0El.classList.add('player--winner');
        playing = false;
    } else if (scores[1] >= 100) {
        player1El.classList.add('player--winner');
        playing = false;
    } else {
        player0El.classList.remove('player--winner');
        player1El.classList.remove('player--winner');
    }

    // Disable buttons for inactive player in online mode
    const isActive = (isRoomOwner && activePlayer === 0) ||
        (!isRoomOwner && activePlayer === 1);
    btnRoll.disabled = !isActive || !playing;
    btnHold.disabled = !isActive || !playing;
};

// New game function
const newGame = function() {
    soundNew.play();
    modifiedInit();

    if (currentRoomId) {
        // Reset scores in database
        saveGameState();
    }
};

// Computer play function
const computerPlay = function() {
    if (!playing) return;

    const dice = Math.trunc(Math.random() * 6) + 1;
    soundDice.play();

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        if (currentScore < COMPUTER_HOLD_THRESHOLD) {
            setTimeout(computerPlay, 1000);
        } else {
            setTimeout(modifiedHold, 1000);
        }
    } else {
        setTimeout(modifiedSwitchPlayer, 1000);
    }
};

// Human play function (roll dice)
const humanRoll = function() {
    if (playing && activePlayer === 0) {
        soundDice.play();
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            modifiedSwitchPlayer();
        }
    }
};

// Setup event listeners for local multiplayer
const setupLocalMultiplayer = function() {
    btnRoll.addEventListener('click', function() {
        if (playing) {
            soundDice.play();
            const dice = Math.trunc(Math.random() * 6) + 1;

            diceEl.classList.remove('hidden');
            diceEl.src = `dice-${dice}.png`;

            if (dice !== 1) {
                currentScore += dice;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            } else {
                modifiedSwitchPlayer();
            }
        }
    });

    btnHold.addEventListener('click', modifiedHold);
    btnNew.addEventListener('click', newGame);
};

// Setup event listeners for vs computer
const setupComputerMode = function() {
    btnRoll.addEventListener('click', humanRoll);
    btnHold.addEventListener('click', function() {
        if (activePlayer === 0) {
            modifiedHold();
        }
    });
    btnNew.addEventListener('click', newGame);
};

// Select all buttons with class 'btns'
const buttons = document.querySelectorAll('.btns');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const btnClass = this.className.split(' ')[1];
        modeSelect.style.display = 'none';

        // Remove existing event listeners
        btnRoll.removeEventListener('click', humanRoll);
        btnHold.removeEventListener('click', modifiedHold);
        btnNew.removeEventListener('click', newGame);

        if (btnClass === 'btn1') {
            // Local multiplayer
            isComputerGame = false;
            gameMode = 'local';
            setupLocalMultiplayer();
        } else if (btnClass === 'btn2') {
            // Vs computer
            isComputerGame = true;
            gameMode = 'cpu';
            setupComputerMode();
        } else if (btnClass === 'btn3') {
            // Online multiplayer
            isComputerGame = false;
            gameMode = 'online';
            document.getElementById('onlineModal').classList.remove('hidden');
            return;
        }

        modifiedInit();
    });
});

// Modify existing game functions
const modifiedInit = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    // Enable/disable buttons based on game mode
    if (isComputerGame && activePlayer === 1) {
        btnRoll.disabled = true;
        btnHold.disabled = true;
        setTimeout(computerPlay, 1000);
    } else {
        btnRoll.disabled = false;
        btnHold.disabled = false;
    }

    if (currentRoomId) {
        saveGameState();
    }
};

const modifiedSwitchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    if (isComputerGame && activePlayer === 1 && playing) {
        btnRoll.disabled = true;
        btnHold.disabled = true;
        setTimeout(computerPlay, 1000);
    } else {
        btnRoll.disabled = false;
        btnHold.disabled = false;
    }

    if (currentRoomId) {
        saveGameState();
    }
};

const modifiedHold = function() {
    if (playing) {
        soundHold.play();
        // Add score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Check for winner
        if (scores[activePlayer] >= 100) {
            soundSuccess.play();
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            btnRoll.disabled = true;
            btnHold.disabled = true;
        } else {
            // Switch to the next player
            modifiedSwitchPlayer();
        }

        if (currentRoomId) {
            saveGameState();
        }
    }
};

// Initialize the game
modifiedInit();
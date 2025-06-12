'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;  // is called state variable, cuz it is part of the application state
let highScore = 0;

//Adding Sounds
const clickSound = new Audio('click.mp3');
const clickSound2 = new Audio('click2.mp3');
const successSound = new Audio('success.mp3');
const errorSound = new Audio('error.mp3');

document.querySelector('.check').addEventListener('click', function() {
    clickSound.play();
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        errorSound.play();
        document.querySelector('.message').textContent = "No number !?";
    } else if (guess < 1 || guess > 20) {
        errorSound.play();
        document.querySelector('.message').textContent = "Enter a number between 1 and 20!";
    } else {
        if (guess === secretNumber) {
            successSound.play();
            document.querySelector('.message').textContent = "Correct Number !! :)";
            document.querySelector('.number').textContent = guess;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore) {
                highScore = score;
            }
            document.querySelector('.highscore').textContent = highScore;
        } else {
            if ((guess < secretNumber) && (guess > 0)) {
                if ((guess === secretNumber - 1) || (guess === secretNumber - 2)) {
                    document.querySelector('.message').textContent = "Little Low !";
                } else {
                    document.querySelector('.message').textContent = "Too Low :(";
                }
            } else if ((guess > secretNumber) && (guess < 20)) {
                if ((guess === secretNumber + 1) || (guess === secretNumber + 2)) {
                    document.querySelector('.message').textContent = "Little High !";
                } else {
                    document.querySelector('.message').textContent = "Too High :(";
                }
            }
            if (score > 0){
                score -= 1;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "You Lost the Game !!";
            }
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    clickSound2.play();
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
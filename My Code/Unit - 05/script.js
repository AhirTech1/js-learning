'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;  // is called state variable, cuz it is part of the application state

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = "No number !?";
    } else {
        if (guess === secretNumber) {
            document.querySelector('.message').textContent = "Correct Number !! :)";
            document.querySelector('.number').textContent = guess;

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';

        } else if (guess <= secretNumber) {
            if ((guess === secretNumber - 1) || (guess === secretNumber - 2)) {
                document.querySelector('.message').textContent = "Little Low !";
            } else {
                document.querySelector('.message').textContent = "Too Low :(";
            }
            if (score > 0){
                score -= 1;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "You Lost the Game !!";
            }
        } else if (guess >= secretNumber) {
            if ((guess === secretNumber + 1) || (guess === secretNumber + 2)) {
                document.querySelector('.message').textContent = "Little High !";
            } else {
                document.querySelector('.message').textContent = "Too High :(";
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
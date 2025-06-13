'use strict';

let scorePlayer1 = document.querySelector('#score--0').textContent;
let scorePlayer2 = document.querySelector('#score--1').textContent;
let currentScore1 = document.querySelector('#current--0').textContent;
let currentScore2 = document.querySelector('#current--1').textContent;
const btnDice = document.querySelector('.btn--roll');
let diceValue;

btnDice.addEventListener('click', function(){
    diceValue = Math.floor(Math.random() * 6) + 1;
    // document.querySelector('.dice').src = 'new-image.png';
   switch (diceValue) {
       case 1:
           document.querySelector('.dice').src = 'dice-1.png';
           break;
       case 2:
           document.querySelector('.dice').src = 'dice-2.png';
           break;
       case 3:
           document.querySelector('.dice').src = 'dice-3.png';
           break;
       case 4:
           document.querySelector('.dice').src = 'dice-4.png';
           break;
       case 5:
           document.querySelector('.dice').src = 'dice-5.png';
           break;
       case 6:
           document.querySelector('.dice').src = 'dice-6.png';
           break;
   }
});
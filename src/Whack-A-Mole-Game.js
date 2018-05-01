// eslint-disable-next-line
'use strict';

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score;


function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
/* 
When we make a list of the holes we will track the
index of the hole and make a Mole a mole show up.
*/

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  console.log(hole);

  if(hole === lastHole) {
    randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);    
}
// eslint-disable-next-line
function startGame() {
  scoreBoard.texContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
}

function bonk(e){
  if(!e.isTrusted) return; // cheater
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
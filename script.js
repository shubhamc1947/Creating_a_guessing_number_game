'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber, 'is the solution');
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.status').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number found 😥');
  } else if (guess === secretNumber) {
    displayMessage('Congrts ,You Won 🥳');
    document.querySelector('.number').textContent = secretNumber;

    // css on winning
    document.querySelector('.wrap').style.backgroundColor = 'greenyellow';
    document.querySelector('.wrap').style.color = '#333';

    // highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high  📈' : 'too Low  📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOu Lose 😖');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing ....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.wrap').style.backgroundColor = '#333';
  document.querySelector('.wrap').style.color = 'white';

  console.log(secretNumber, 'is the solution');
});

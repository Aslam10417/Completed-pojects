'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `❤ Correct Number!`;
console.log(document.querySelector('.message').textContent);

const x = (document.querySelector('.guess').value = 23);
console.log(x);
*/

// const m = function () {
//   const guess = document.querySelector('.guess').value;
//   console.log(guess, typeof guess);
//   // return guess;
// };

// document.querySelector('.message').textContent = '😊 Not a number!';
// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.highscore').textContent = hScore;
// } else if (guess < secretNumber) {
//   document.querySelector('.message').textContent = `🤦‍♂️ Too Low!`;
//   score--;
// }
// document.querySelector('.message').textContent = `Sorry! you lost the game`;
// document.querySelector('.score').textContent = score;
// console.log(guess, typeof guess, score);
// displayMessage('guess', `Sorry! you lost the game`);
// document.querySelector('.score').textContent = score;
// document.querySelector('.number').textContent = '?';
// document.querySelector('.message').textContent = `Start guessing...`;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hScore = 0;
let last_score = 0;
let flag = false;

// Function to display the message
const displayMessage = function (className, message) {
  document.querySelector('.' + className).textContent = message;
};

// Event for checking button click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      displayMessage('message', '😊 No number!');
      // If you are already win
    } else if (flag) {
      displayMessage('message', `❤ You already won, Please reset!`);
      // If you are guess equal to secretNumber
    } else if (guess === secretNumber) {
      displayMessage('message', `❤ Correct Number!`);
      displayMessage('number', secretNumber);
      flag = true;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      last_score = score;
      if (hScore < last_score) {
        hScore = last_score;
      }
      displayMessage('highscore', hScore);
      // If you are guess not equal to secretNumber
    } else if (guess !== secretNumber) {
      displayMessage(
        'message',
        guess > secretNumber ? `🤷‍♀️ Too high!` : `🤦‍♂️ Too Low!`
      );
      score--;
    }
    // if score is less than 1
  } else {
    displayMessage('message', `Sorry! you lost the game`);
    score = 0;
  }
  displayMessage('score', score);
});

// Function to reset the game
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('score', score);
  displayMessage('number', '?');
  displayMessage('message', `Start guessing...`);
  flag = false;
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

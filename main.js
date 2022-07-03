// uses strict mode so strings are not coerced, variables are not hoisted, etc...
'use strict';

// ? Defining variables to access elements.
const header = document.querySelector('header');
const main = document.querySelector('main');
const letsPlay = document.querySelector('.lets-play');
const icons = document.querySelectorAll('img');
const player1Score = document.querySelector('#player-1-score');
const player2Score = document.querySelector('#player-2-score');
const player1Select = document.querySelectorAll('.player-1-choice');
const player2Select = document.querySelectorAll('.player-2-choice');
const displayWinner = document.querySelector('.display-winner');

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

let playerOneChoice;
let playerTwoChoice;
// ? Function to show the gameboard.
letsPlay.addEventListener('click', () => {
  header.classList.add('hidden');
  main.classList.remove('hidden');
});

// ? Adding event listeners to all of player 1 icons.

player1Select.forEach((icon) => {
  icon.addEventListener('click', () => {
    let playerOneChoiceAll = icon.classList.value;
    playerOneChoice = playerOneChoiceAll.substring(
      0,
      playerOneChoiceAll.indexOf(' ')
    );
    console.log(playerOneChoice);
  });
});

// ? Adding event listeners to all of player 2 icons.

player2Select.forEach((icon) => {
  icon.addEventListener('click', () => {
    let playerTwoChoiceAll = icon.classList.value;
    playerTwoChoice = playerTwoChoiceAll.substring(
      0,
      playerTwoChoiceAll.indexOf(' ')
    );
    console.log(playerTwoChoice);
  });
});
// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  // should detect a tie
  // should detect which hand won
  // should scrub input to ensure lowercase with "trim"ed whitespace
  let playerOneScore = +player1Score.textContent;
  let playerTwoScore = +player2Score.textContent;
  let userOne = playerOneChoice;
  let userTwo = playerTwoChoice;

  if (userOne === userTwo) {
    displayWinner.innerHTML = '';
    displayWinner.insertAdjacentHTML('afterbegin', `<h1>It's a Tie!</h1>`);
  } else if (
    (userOne === 'rock' && userTwo === 'scissors') ||
    (userOne === 'paper' && userTwo === 'rock') ||
    (userOne === 'scissors' && userTwo === 'paper')
  ) {
    displayWinner.innerHTML = '';
    displayWinner.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="player-wins">
      <h1>Player 1 Wins!</h1>
      <p>${userOne} beats ${userTwo}</p>
      </div>
      `
    );
    playerOneScore += 1;
    player1Score.textContent = playerOneScore;
  } else if (
    (userOne === 'rock' && userTwo === 'paper') ||
    (userOne === 'paper' && userTwo === 'scissors') ||
    (userOne === 'scissors' && userTwo === 'rock')
  ) {
    displayWinner.innerHTML = '';
    displayWinner.insertAdjacentHTML(
      'afterbegin',
      `
    <div class="player-wins">
    <h1>Player 2 Wins!</h1>
    <p>${userTwo} beats ${userOne}</p>
    </div>
    `
    );
    playerTwoScore += 1;
    player2Score.textContent = playerTwoScore;
  }
};

// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// function getPrompt() {
//   rl.question('hand1: ', (answer1) => {
//     rl.question('hand2: ', (answer2) => {
//       console.log(rockPaperScissors(answer1, answer2));
//       getPrompt();
//     });
//   });
// }

// //# Start Mocha Test Section
// // Unit Tests
// // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {
//   // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
//   describe('#rockPaperScissors()', () => {
//     it('should detect a tie', () => {
//       assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
//       assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
//       assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
//     });
//     it('should detect which hand won', () => {
//       assert.equal(rockPaperScissors('rock', 'paper'), 'Hand two wins!');
//       assert.equal(rockPaperScissors('paper', 'scissors'), 'Hand two wins!');
//       assert.equal(rockPaperScissors('rock', 'scissors'), 'Hand one wins!');
//     });
//     it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
//       assert.equal(rockPaperScissors('rOcK', ' paper '), 'Hand two wins!');
//       assert.equal(rockPaperScissors('Paper', 'SCISSORS'), 'Hand two wins!');
//       assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), 'Hand one wins!');
//     });
//   });
// } else {
//   // always returns ask the user for another input
//   getPrompt();
// }

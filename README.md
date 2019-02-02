# Let's Play: Guess That State!

## Introduction
NodeWordGuess is a CLI (Command-Line Interface) Game that gives a user `x` amount of tries to guess the correct word. 
For this edition, the words to be guessed are the 50 United States of America, which will be chosen at random during each game. When the user runs out of remainging guesses or when the user correctly guesses the word, he/she will be asked whether or not they would like to play again.

## Required Files
* `letter.js` - contains a constructor, Letter
* `word.js` - contains a constructor, Word, which requires the Letter constructor to rebuild the random state name
* `index.js` - contains the game's logic and inquirer prompts for gameplay

## Required packages & APIs
* [Inquirer](https://www.npmjs.com/package/inquirer)

## Command Line Calls

To start the game:
```
node index.js 
```

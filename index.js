const inquirer = require('inquirer');
const Word = require('./word.js');

// var newGuess = process.argv[2].toLowerCase();

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var guessesRemaining = 10;

var str = 'string';

var word = new Word(str);
word.printWord();


function playGame() {
    if (guessesRemaining == 0) { 
        console.log(`You've lost the game`); 
    }     
    else {
        choiceUpdate();
    }

}

playGame();


// if (alphabet.includes(newGuess) && guesses.includes(newGuess)) {
//     //write some prompt telling the user they already tried that one
//     //
// }
// if (alphabet.includes(newGuess) && !guesses.includes(newGuess)) {
//     //guesses.push(newGuess);
//     //
// }

// if (newGuess.length > 1) {
//     //prompt: please enter a valid guess
//     //
// }


function choiceUpdate() {
    console.log("\n--------\npromptPlayerCreation: NEW PLAYER!\n--------\n");
    inquirer
      .prompt([
        {
            name: "newGuess",
            type: "input",
            message: "Guess a Letter?: "
        }
      ])
      .then(function(answers) {
        newGuess = answers.newGuess
        word.writeLetters();
        guessesRemaining -= word.count;
      });
  }
  

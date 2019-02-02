const inquirer = require('inquirer');
const Word = require('./word.js');

// var newGuess = process.argv[2].toLowerCase();

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guesses = [];

var guessesRemaining = 10;
var str = 'string';
var word = new Word(str);
word.storeWord();

// while (word.cleanLetters != str) {
//     choiceUpdate();

// }

playGame();

function playGame() {
    if (guessesRemaining > 0) {
        // console.log(guessesRemaining);
        guessWord();
        // word.updatedLetters(newGuess);
    //     if (!word.containsGuess(newGuess)) {
    //         guessesRemaining--;
    //   }
        
    }

}

function guessWord() {
    // if (guessesRemaining > 0) {
        // console.log(guessesRemaining);
        guessLetter();
        
        

    }

function guessLetter() {
    inquirer
      .prompt([
        {
            name: "newGuess",
            type: "input",
            message: "Guess a Letter?: "
        }
      ])
      .then(function(answers) {
        newGuess = answers.newGuess.toLowerCase();

        if (alphabet.includes(newGuess) && guesses.includes(newGuess)) {
            console.log(`You've already guessed that. Please try again.`);
            // break;
            guessWord();
        }

        else if ((newGuess.length > 1) || 
                    (newGuess == ' ') || 
                    (newGuess == '') || 
                    (!alphabet.includes(newGuess)) ) {
            console.log(`Please enter a valid guess.`);
            // break;
            guessWord();
        }
        else if (alphabet.includes(newGuess) && !guesses.includes(newGuess)) {
            
            guesses.push(newGuess);
            word.updatedLetters(newGuess);
            // console.log(word.containsThis(newGuess));
            if (!word.containsThis(newGuess)) {
                guessesRemaining--;
                console.log(`INCORRECT! You have ${guessesRemaining} guesses remaining.`);
                console.log(word.updatedLetters(newGuess));
                
            }
            else {
                console.log(`CORRECT!`);
                console.log(word.updatedLetters(newGuess));
            }
            guessWord();
        }
      
      });

      
    }

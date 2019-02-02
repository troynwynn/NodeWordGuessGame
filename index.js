const inquirer = require('inquirer');
const Word = require('./word.js');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guesses = [];

var guessesRemaining = 10;
var states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Distateict of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var state = states[Math.floor(Math.random()*states.length)];
var stateLowercase = state.toLowerCase();
var word = new Word(stateLowercase);
word.storeWord();


playGame();

function playGame() {
    guessWord();
}

function endGame() {
    if ((guessesRemaining > 0) && (word.cleanWord.split(' ').join('') == stateLowercase)) {
        console.log(`Great Scott! You've done it!`);

        inquirer
            .prompt({
                name: "again",
                type: "confirm",
                message: "Would you like to play again?"
                })
                .then(function(answer) {
                if (answer.again === true) {
                    guesses =[];
                    guessesRemaining = 10;
                    state = states[Math.floor(Math.random()*states.length)];
                    stateLowercase = state.toLowerCase();
                    word = new Word(stateLowercase);
                    word.storeWord();
                    playGame();
                } else {
                    console.log("Come back again soon!");
                }
            });

    }
    if (guessesRemaining == 0) {
        console.log(`You've lost. \nThe correct answer was: ${state}\nWhat do you have to say for yourself?`);

        inquirer
            .prompt({
                name: "again",
                type: "confirm",
                message: "Would you like to play again?"
                })
                .then(function(answer) {
                if (answer.again === true) {
                    guesses =[];
                    guessesRemaining = 10;
                    state = states[Math.floor(Math.random()*states.length)];
                    stateLowercase = state.toLowerCase();
                    word = new Word(stateLowercase);
                    word.storeWord();
                    playGame();
                } else {
                    console.log("Come back again soon!");
                }
            });

        }
}

function guessWord() {
    if ((guessesRemaining > 0) && (word.cleanWord.split(' ').join('') !== stateLowercase)){
        guessLetter();
    }
    else 
        endGame();
    
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
            console.log(word.updatedLetters(newGuess));
            guessWord();
        }

        else if ((newGuess.length > 1) || 
                    (newGuess == ' ') || 
                    (newGuess == '') || 
                    (!alphabet.includes(newGuess)) ) {
            console.log(`Please enter a valid guess.`);
            console.log(word.updatedLetters(newGuess));
            guessWord();
        }
        else if (alphabet.includes(newGuess) && !guesses.includes(newGuess)) {
            
            guesses.push(newGuess);
            word.updatedLetters(newGuess);

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

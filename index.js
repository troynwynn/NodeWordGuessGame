const inquirer = require('inquirer');
const Word = require('./word.js');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' '];
var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


//START THE GAME
playGame();


function playGame() {

    console.log(`\nLet's Play: Guess That State!`)
    initGame();
    
    guessWord();
}

function initGame() {
    guesses = [];
    guessesRemaining = 10;  
    state = states[Math.floor(Math.random()*states.length)];
    stateLowercase = state.toLowerCase();
    word = new Word(stateLowercase);
    word.storeWord();
    console.log(word.printWord());

}

function playAgain() {
    inquirer
    .prompt({
        name: "again",
        type: "confirm",
        message: "Would you like to play again?"
        })
        .then(function(answer) {
        if (answer.again === true) {
            playGame();
        } else {
            console.log(`\n`);
            console.log("Come back again soon!");
        }
    });

}

function endGame() {
    if ((guessesRemaining > 0) && (word.cleanWord.split(' ').join('') == stateLowercase.split(' ').join(''))) {
        console.log(`\n`);
        console.log(`GREAT SCOTT! You've done it!`);
        console.log(`\n`);
        playAgain();

    }
    if (guessesRemaining == 0) {
        console.log(`\n`);
        console.log(`You've lost. \nThe correct answer was: ${state}\nWhat do you have to say for yourself?`);
        console.log(`\n`);
        playAgain();


    }
}

function guessWord() {
    if ((guessesRemaining > 0) && (word.cleanWord.split(' ').join('') !== stateLowercase.split(' ').join(''))){
        guessLetter();
    }
    else 
        endGame();
    
}

function guessLetter() {
    console.log(`\n`);
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
            console.log(`\n`);
            console.log(`You've already guessed that. Please try again.`);
            console.log(`\n`);
            console.log(word.updatedLetters(newGuess));
            guessWord();
        }

        else if ((newGuess.length > 1) || 
                    (newGuess == '') || 
                    (!alphabet.includes(newGuess)) ) {
            console.log(`\n`);
            console.log(`Please enter a valid guess.`);
            console.log(`\n`);
            console.log(word.updatedLetters(newGuess));
            guessWord();
        }
        else if (alphabet.includes(newGuess) && !guesses.includes(newGuess)) {
            
            guesses.push(newGuess);
            word.updatedLetters(newGuess);
            console.log(`\n`);

            if (!word.containsThis(newGuess)) {
                guessesRemaining--;
                console.log(`INCORRECT! You have ${guessesRemaining} guesses remaining.`);
                console.log(`\n`);
                console.log(word.updatedLetters(newGuess));
                
            }
            else {
                console.log(`CORRECT!`);
                console.log(`\n`);
                console.log(word.updatedLetters(newGuess));
            }
            guessWord();
        }
      
      });

      
    }

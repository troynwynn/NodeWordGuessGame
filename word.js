// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   (1) An array of `new` Letter objects representing the letters of the underlying word

//   (2) A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   (3) A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


const Letter = require('./letter.js');

var newGuess = process.argv[2];

var Word = function(word) {
    this.word = word;
    this.letters = []; // (1)
    this.cleanWord= ``;
    this.storedLetters = [];
    
    this.storeWord = function() {
        for (let i=0; i<this.word.length; i++) {
            var letter = new Letter(this.word[i]);
            this.storedLetters = this.letters.push(letter);
        }
    }

    this.printWord = function() { // (2)
        this.cleanWord = ``;
        for (let i=0; i<this.letters.length;i++){
            this.cleanWord += `${this.letters[i].correctCharacter()} `;
        }
        return this.cleanWord;
    }

    this.updatedLetters = function(newGuess) {
        for (let i=0; i< this.letters.length; i++) {
            var realLetter = this.letters[i].char;
            if (realLetter == newGuess) {
                this.letters[i].isEqualTo(newGuess);
            }
        } 
        return this.printWord();
    }

    this.containsThis = function(newGuess) {
        if (this.cleanWord.includes(newGuess)) {
            return true;
        }
        else {
            return false;
        }

    }
}

// var str = 'strings';

// var test = new Word(str);

// test.storeWord();
// console.log(test.updatedLetters(newGuess));
// console.log(test.updatedLetters(newGuess));
// console.log(test.updatedLetters(newGuess));
// console.log(test.updatedLetters(newGuess));

// // console.log(newGuess);

module.exports = Word;
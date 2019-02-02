const Letter = require('./letter.js');

var Word = function(word) {
    this.word = word;
    this.letters = []; // (1)
    this.cleanWord= ``;
    this.storedLetters = [];
    
    this.storeWord = function() {
        for (let i=0; i<this.word.length; i++) {
            var letter = new Letter(this.word[i]);
            if (letter.char == ' ') { 
                letter.guessed = true;
            }
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

    this.resetWord = function() {
        for (let i=0; i<this.letters.length;i++) {
            this.letters[i].guessed = false;
        }
    }
}

module.exports = Word;
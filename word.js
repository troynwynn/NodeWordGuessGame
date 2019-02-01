const Letter = require('./letter.js');

var Word = function(word) {
    this.word = word;
    this.letters = [];
    this.count = 0;
    this.cleanLetters = ``;
    this.writeLetters = function() {
        for (let i=0; i< this.word.length; i++) {
            var letter = new Letter(this.word[i]);
            this.updateLetters(letter, newGuess);
            this.letters.push(letter.char);
        }

        this.printWord();
    }

    this.printWord = function() {
        this.cleanLetters = this.letters.join(` `);
        console.log(this.cleanLetters);

    }

    this.updateLetters = function(letter, newGuess) {
        letter.checkGuess(newGuess);
        if (!letter.checkGuess(newGuess)) {
            this.count++;
        }
        letter.updateStatus();
    }
}

module.exports = Word;
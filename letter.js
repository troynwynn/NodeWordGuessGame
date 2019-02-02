var Letter = function(char) {
    this.char = `${char}`;
    this.hidden = `_`
    this.guessed = false;
    this.correctCharacter = function() {
        if (this.guessed) {
            return this.char;
        }
        else {
            return this.hidden;
        }
    }

    this.isEqualTo = function(input) {
        if (input == this.char) {
            this.guessed = true; 
        }
        this.correctCharacter();
    }
}

module.exports = Letter;
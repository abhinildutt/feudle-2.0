class Feudle {
    constructor() {
        this.word = "";
        this.guess = ""
        this.totalGuesses = 6;
        this.guesses = 0;

        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.letterMap = new Map();
        for (let i = 0; i < alphabet.length; i++) {
            this.letterMap.set(alphabet[i], {
                guessed: false,
                inWord: false,
                inPosition: false
            });
        }
    }

    setWord(word) {
        this.word = word.toUpperCase();
    }

    checkWin() {
        return this.guess === this.word;
    }

    checkLoss() {
        return this.guesses >= this.totalGuesses;
    }

    makeGuess(guess) {
        this.guess = guess.toUpperCase();
        for (let i = 0; i < this.guess.length; i++) {
            let char = this.guess.charAt(i);
            if (this.letterMap.has(char)) {
                this.letterMap.get(char).guessed = true;
                if (this.word.includes(char)) {
                    this.letterMap.get(char).inWord = true;
                }
            }
        }

        for (let i = 0; i < this.guess.length; i++) {
            let char = this.guess.charAt(i);
            if (char === this.word.charAt(i)) {
                this.letterMap.get(char).inPosition = true;
            }
        }

        this.guesses++;
        return this.checkWin();
    }
}

export default Feudle;
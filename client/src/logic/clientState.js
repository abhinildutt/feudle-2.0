import { getDictionary } from './lib';

class ClientState {
    constructor() {
        this.id = 0;
        this.ready = false;
        this.gameStarted = false;
        this.gameOver = false;
        this.word = "";
        this.dictionary = getDictionary();
        this.guessedLetters = new Map();
        this.guesses = [];
    }

    setReady(ready) {
        this.ready = ready;
    }

    getReady() {
        return this.ready;
    }

    setGameStarted(gameStarted) {
        this.gameStarted = gameStarted;
    }

    getGameStarted() {
        return this.gameStarted;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setGameOver(gameOver) {
        this.gameOver = gameOver;
    }

    getGameOver() {
        return this.gameOver;
    }

    setWord(word) {
        this.word = word;
    }

    getColorVec(guess) {
        let uppercaseGuess = guess.toUpperCase();
        let colorVec = [];
        for (let i = 0; i < uppercaseGuess.length; i++) {
            let c = uppercaseGuess.charAt(i);
            if (this.word.includes(c) && this.word.charAt(i) === c) {
                colorVec.push('G');
            } else if (this.word.includes(c) && this.word.charAt(i) !== c) {
                colorVec.push('Y');
            } else {
                colorVec.push('-');
            }
        }
        return colorVec;
    }

    checkGuess(guess) {
        let lowercaseGuess = guess.toLowerCase();
        if (lowercaseGuess.length !== 5) {
            console.log("Guess must be 5 letters long");
            return false;
        }
        if (this.guesses.includes(lowercaseGuess)) {
            console.log("Guess already made");
            return false;
        }
        if (!this.dictionary.includes(lowercaseGuess)) {
            console.log("Guess not in dictionary");
            return false;
        }
        return true;
    }

    setGuess(guess) {
        this.guesses.push(guess.toUpperCase());
    }
}

export default ClientState;
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

    color(guess) {
        guess.toUpperCase();
        var color = "";
        for (let i = 0; i < guess.length; i++) {
            let char = guess.charAt(i);
            var flag = 0;
            if (char == this.word.charAt(i)) {
                color += "g";
                flag = 1;
            } else {
                for (let j = i; j < guess.length; j++) {
                    if (i != j && char == this.word.charAt(j)) {
                        color += "y";
                        flag = 1;
                    }
                }
            }
            if (flag == 0) {
                color += "e";
            }
        }
        return color;
    }
}

export default Feudle;
class Feudle {
    constructor() {
        this._word = "";
        this._guess = ""
        this._total_guesses = 6;
        this._guesses = 0;

        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this._letter_map = new Map();
        for (let i = 0; i < alphabet.length; i++) {
            this._letter_map.set(alphabet[i], {
                guessed: false,
                in_word: false,
                in_position: false
            });
        }
    }

    set_word(word) {
        this._word = word.toUpperCase();
    }

    check_win() {
        return this._guess == this._word;
    }

    check_lose() {
        return this._guesses >= this._total_gusses;
    }

    guess(guess) {
        this._guess = guess.toUpperCase();
        for (let i = 0; i < this._guess.length; i++) {
            let char = this._guess.charAt(i);
            if (this._letter_map.has(char)) {
                this._letter_map.get(char).guessed = true;
                if (this._word.includes(char)) {
                    this._letter_map.get(char).in_word = true;
                }
            }
        }

        for (let i = 0; i < this._guess.length; i++) {
            let char = this._guess.charAt(i);
            if (char == this._word.charAt(i)) {
                this._letter_map.get(char).in_position = true;
            }
        }

        this._guesses++;
        return this.check_win();
    }
}
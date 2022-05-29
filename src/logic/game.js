export class Feudle {
    constructor() {
        this._word = "";
        this._guess = "";
        this._total_gusses = 6;
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
    color(guess) {
        var color = "";
        for (let i = 0; i < this._guess.length; i++) {
            let char = this._guess.charAt(i);
            var flag = 0;
            if (char == this._word.charAt(i)) {
                color += "g";
                flag = 1;
            }
            else {
                for (let j = i; j < this._guess.length; j++) {
                    if (i != j && char == this._word.charAt(j)) {
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


interface Letter {
    guessed: boolean
    in_word: boolean
    in_position: boolean
}

class Feudle {
    private _word: string
    private _total_gusses: number
    private _guesses: number
    private _guess: string
    private _letter_map: Map<string, Letter>

    constructor() {
        this._word = "";
        this._guess = ""
        this._total_gusses = 6;
        this._guesses = 0;

        let alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this._letter_map = new Map<string, Letter>();
        for (let i = 0; i < alphabet.length; i++) {
            this._letter_map.set(alphabet[i], {
                guessed: false,
                in_word: false,
                in_position: false
            });
        }
    }

    set_word(word: string) {
        this._word = word.toUpperCase();
    }

    check_win(): boolean {
        return this._guess == this._word;
    }

    check_lose(): boolean {
        return this._guesses >= this._total_gusses;
    }

    guess(guess: string): boolean {
        this._guess = guess.toUpperCase();
        for (let i = 0; i < this._guess.length; i++) {
            let char = this._guess.charAt(i);
            if (this._letter_map.has(char)) {
                // this._letter_map.get(char).guessed = true;
                if (this._word.includes(char)) {
                    // this._letter_map.get(char).in_word = true;
                }
            }
        }

        for (let i = 0; i < this._guess.length; i++) {
            let char = this._guess.charAt(i);
            if (char == this._word.charAt(i)) {
                // this._letter_map.get(char).in_position = true;
            }
        }

        this._guesses++;
        return this.check_win();
    }

    color(guess: string): string {
        var color : string = "";
        for (let i = 0; i < this._guess.length; i++) {
            let char = this._guess.charAt(i);
            var flag = 0;
            if (char == this._word.charAt(i)) {
               color += "g";
               flag = 1;
            }
            else {
                for (let j = 0; j < this._guess.length; j++) {
                    if (i != j && char == this._word.charAt(j)) {
                        color += "y";
                        flag = 1;
                        break;
                    }
                }
            }
            if(flag == 0) {
                color += "e";
            }
        }
        return color;
    }
}
import WORDS from './words.json';

function getDictionary() {
    return WORDS;
}

function getWord(index) {
    return WORDS[index];
}

export { getDictionary, getWord };
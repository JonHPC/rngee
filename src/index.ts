// index.js
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function randomNumber(min, max) {
    // TODO: add parameter to specify number of random numbers, type (int, float), return array of results
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function coinToss() {
    // TODO: add parameter to specify number of coins, return array of results
    return Math.floor(Math.random() * 2) === 0 ? 'Heads' : 'Tails';
}

function randomColor() {
    // TODO: add parameter to specify number of colors, format, and return as
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}

function diceRoll() {
    // TODO: add parameter to specify number of sides, and number of dice, return array of results
    return Math.floor(Math.random() * 6) + 1;
}

function randomPassword(length) {
    const characters = [
        'A',
        'a',
        'B',
        'b',
        'C',
        'c',
        'D',
        'd',
        'E',
        'e',
        'F',
        'f',
        'G',
        'g',
        'H',
        'h',
        'I',
        'i',
        'J',
        'j',
        'K',
        'k',
        'L',
        'l',
        'M',
        'm',
        'N',
        'n',
        'O',
        'o',
        'P',
        'p',
        'Q',
        'q',
        'R',
        'r',
        'S',
        's',
        'T',
        't',
        'U',
        'u',
        'V',
        'v',
        'W',
        'w',
        'X',
        'x',
        'Y',
        'y',
        'Z',
        'z',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '-',
        '+',
        '=',
        '?',
        '/',
        '<',
        '>',
        '.',
        ',',
    ];
    let str = '';
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        str += characters[index];
    }
    return str;
}

module.exports = {
    capitalize,
    randomNumber,
    coinToss,
    randomColor,
    diceRoll,
    randomPassword,
};

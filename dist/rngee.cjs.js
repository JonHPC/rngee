'use strict';

// index.ts
function capitalize(word) {
    // TODO: randomly capitialize X letters in a string
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function randomNumber(min, max, values = 1) {
    if (values > 1) {
        let arr = [];
        for (let i = 0; i < values; i++) {
            arr.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        return arr;
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

function coinToss(tosses = 1, win = "Heads", loss = "Tails") {
    if (tosses > 1) {
        let arr = [];
        for (let i = 0; i < tosses; i++) {
            arr.push(Math.floor(Math.random() * 2) === 0 ? win : loss);
        }
        return arr;
    } else {
        return Math.floor(Math.random() * 2) === 0 ? win : loss;
    }
}

function randomColor() {
    // TODO: add parameter to specify number of colors, format, and return as
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}

function diceRoll(tosses = 1, sides = 6) {
    // TODO: add parameter to specify number of sides, and number of dice, return array of results
    if (tosses > 1) {
        let arr = [];
        for (let i = 0; i < tosses; i++) {
            arr.push(Math.floor(Math.random() * sides) + 1);
        }
        return arr;
    } else {
        return Math.floor(Math.random() * sides) + 1;
    }
}

function randomString(length = 8) {
    // TODO: add parameter to specify length of string, exclude/include lower/upper/nums/symbols
    // Create an array of characters to choose from
    const characters = [];
    for (let i = 32; i < 127; i++) {
        characters.push(String.fromCharCode(i));
    }
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
    randomString,
};

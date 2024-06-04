'use strict';

// index.ts

function randomNumber(min, max, values = 1) {
    if (typeof min !== 'number' || typeof max !== 'number' || typeof values !== 'number') {
        throw new Error('Input must be a number');
    }
    if (min >= max) {
        throw new Error('Min value must be less than max value');
    }
    if (values < 1) {
        throw new Error('Number of values must be greater than 0');
    }

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

function coinToss(tosses = 1, win = 'Heads', loss = 'Tails') {
    if (typeof win !== 'string' || typeof loss !== 'string' || typeof tosses !== 'number') {
        throw new Error('Input must be a string');
    }
    if (win === loss) {
        throw new Error('Win and loss values must be different');
    }
    if (tosses < 1) {
        throw new Error('Number of tosses must be greater than 0');
    }

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

function randomColor(format = 'hex') {
    if (format === 'hex') {
        return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
    } else if (format === 'rgb') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        throw new Error('Invalid format');
    }
}

function diceRoll(tosses = 1, sides = 6) {
    if (typeof tosses !== 'number' || typeof sides !== 'number') {
        throw new Error('Input must be a number');
    }
    if (tosses < 1) {
        throw new Error('Number of tosses must be greater than 0');
    }
    if (sides < 1) {
        throw new Error('Number of sides must be greater than 0');
    }
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

function randomString(length = 8, lower = true, upper = true, nums = true, symbols = true) {
    if (
        typeof length !== 'number' ||
        typeof lower !== 'boolean' ||
        typeof upper !== 'boolean' ||
        typeof nums !== 'boolean' ||
        typeof symbols !== 'boolean'
    ) {
        throw new Error('Input must be a number');
    }
    if (length < 1) {
        throw new Error('Length must be greater than 0');
    }
    if (!lower && !upper && !nums && !symbols) {
        throw new Error('At least one character type must be true');
    }

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCharsArray = lowerChars.split('');
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCharsArray = upperChars.split('');
    const numChars = '0123456789';
    const numCharsArray = numChars.split('');
    const symbolChars = '!@#$%^&*()_+-={};:<>,./?';
    const symbolCharsArray = symbolChars.split('');
    const characters = [];
    if (lower) characters.push(...lowerCharsArray);
    if (upper) characters.push(...upperCharsArray);
    if (nums) characters.push(...numCharsArray);
    if (symbols) characters.push(...symbolCharsArray);

    let str = '';
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        str += characters[index];
    }
    return str;
}

module.exports = {
    randomNumber,
    coinToss,
    randomColor,
    diceRoll,
    randomString,
};

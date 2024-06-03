### rngee, an open source JavaScript library for random values

## Table of Contents

-   [Features](#features)
-   [Installing](#installing)
    -   [Package Manager](#package-manager)
-   [Example](#example)
-   [All Functions](#all-functions)

## Features

-   Simple, pure, lightweight functions
-   Get all sorts of random values!
    -   Random Numbers
    -   Random Colors
    -   Random Strings
    -   Random Dice Throws (d6, d20 etc)
    -   Random Coin Tosses
-   Get single values or multiple values in an array
-   Options to specify:
    -   Int, float etc
    -   Hexcode, RGB etc
    -   Uppercase, Lowercase, numbers, symbols etc
    -   Number of dice, number of sides
    -   Number of coin tosses
-   **_ Work in progress _**

## Installing

### Package Manager

Using npm:

```bash
$ npm install rngee
```

## Example

```js
// index.js

import rngee, (coinToss) from 'rngee';

function flipCoinRandomTimes() {
    const numOfTosses = rngee.randomNumber(1,10);
    return coinToss(numOfTosses);
}

console.log(flipCoinRandomTimes()); // ["Heads", "Tails", "Tails", "Heads"]
console.log(flipCoinRandomTimes()); // ["Tails", "Heads"]
```

If you are using `require` for importing, **only default export is available**:

```js
const rngee = require('rngee');
console.log(rngee.coinToss()); // "Heads"
```

## All Functions

-   randomNumbers

```js
/* 
Input Parameters: 
    min: any number 
    max: any number
    values: any 

Output:
    By default, returns a single number
    If 'values' is greater than 1, then return an array of numbers
*/
```

-   coinToss

```js
/*
Input Parameters:
    tosses: number of coins to toss (defaults to 1)
    win: winning string output (defaults to "Heads")
    loss: losing string output (defaults to "Tails")

Output:
    By default, returns either "Heads" or "Tails" (or specified value)
    If 'tosses' is greater than 1, then return an array of strings
*/
```
-   randomColor
-   diceRoll
-   randomString

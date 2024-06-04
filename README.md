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

You can import the entire 'rngee' package or the individual functions.

Below is an example of using both methods of calling the functions.
```js
// index.js

import rngee, { coinToss } from 'rngee';

function flipCoinRandomTimes() {
    const numOfTosses = rngee.randomNumber(1,10);
    return coinToss(numOfTosses);
}

console.log(flipCoinRandomTimes()); // An array of "Heads" and/or "Tails"
```

If you are using `require` for importing, **only default export is available**:

```js
const rngee = require('rngee');
console.log(rngee.coinToss()); // "Heads"
console.log(rngee.coinToss(2)); // ["Tails", "Heads"]
```

## All Functions

You can copy and paste the example code below to try it out

-   randomNumbers

```js
import rngee from 'rngee';
/* *
* Generates a random number or an array of random numbers
* @param min: number
* @param max: number
* @param values: number - how many values are generated

* @returns a single random number by default
    If 'values' is greater than 1, then return an array of numbers
*/
console.log(rngee.randomNumbers()); //Returns one values between 1-10
const min = 4;
const max = 20;
console.log(rngee.randomNumbers(min, max)); // Returns one value between 4-20
const values = 4
console.log(rngee.randomNumbers(min, max, values)); // An array of four values between 4 and 20

```

-   coinToss

```js
import rngee from 'rngee';
/*
* Returns a single coin toss or an array of coin tosses
* @param tosses: number - number of coins to toss (defaults to 1)
* @param win: string - (defaults to "Heads")
* @param loss: string - (defaults to "Tails")

* @returns either "Heads" or "Tails" by default (or specified value)
    If 'tosses' is greater than 1, then return an array of strings
*/
console.log(rngee.coinToss()); // Returns either "Heads" or "Tails"
const tosses = 3;
console.log(rngee.coinToss(3)); // Returns an array of "Heads" or "Tails"
const win = "USC";
const loss = "UCLA";
console.log(rngee.coinToss(1, win, loss)); // Returns either "USC" or "UCLA"

```
-   randomColor

```js
import rngee from 'rngee';
/*
* Returns a random Hexcode of RGB value
* @param format: string - only valid options are 'hex' or 'rgb' ('hex' is the default format)

* @returns a random Hexcode like #FFFFFF by default
    If 'rgb' will return a RGB value like rgb(0,0,0)
*/
console.log(rngee.randomColor()); // Returns a random Hexcode value
console.log(rngee.randomColor('hex')); // Returns a random Hexcode value
console.log(rngee.randomColor('rgb')); // Returns a random RGB value
```
-   diceRoll

```js
import rngee from 'rngee';
/*
* Returns the results of dice rolls
* @param tosses: number - specify the number of dice to toss (defaults to 1)
* @param sides: number - specify the number of sides, ex. 4, 6, 10, 20 (defaults to 6)

* @returns one number between 1-6 by default
    If 'tosses' is greater than 1, then return an array of numbers
*/
console.log(rngee.diceRoll()); // Returns a single dice roll value between 1-6
const tosses = 3;
console.log(rngee.diceRoll(tosses)); // Returns 3 dice rolls between 1-6 in an array
const sides = 20;
console.log(rngee.diceRoll(1, sides)); // Returns 1 dice roll between 1-20 (d20)
```
-   randomString

```js
import rngee from 'rngee';
/*
* Generates a random string
* @param length: number - specify the length of the random string (defaults to 8)
* @param lower: boolean - to include lower case characters (defaults to true)
* @param upper: boolean - to include upper case characters (defaults to true)
* @param nums: boolean - to include number characters (defaults to true)
* @param symbols: boolean - to include symbol characters (defaults to true)

* @returns a random length string
*/
console.log(rngee.randomString()); // Returns a random string of 8 characters
const length = 12
const lower = true;
const upper = false;
const nums = true;
const symbols = false;
console.log(rngee.randomString(12, lower, upper, nums, symbol)); // Returns a string of 12 characters, only lowercase letters and numbers
```

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rngee = {}));
})(this, (function (exports) { 'use strict';

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
      return '#' + (Math.random() * 0xffffff << 0).toString(16).padStart(6, '0');
    }
    function diceRoll() {
      // TODO: add parameter to specify number of sides, and number of dice, return array of results
      return Math.floor(Math.random() * 6) + 1;
    }
    function randomPassword(length) {
      var characters = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '?', '/', '<', '>', '.', ','];
      var str = '';
      for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * characters.length);
        str += characters[index];
      }
      return str;
    }
    var src = {
      capitalize: capitalize,
      randomNumber: randomNumber,
      coinToss: coinToss,
      randomColor: randomColor,
      diceRoll: diceRoll,
      randomPassword: randomPassword
    };
    var src_1 = src.capitalize;
    var src_2 = src.randomNumber;
    var src_3 = src.coinToss;
    var src_4 = src.randomColor;
    var src_5 = src.diceRoll;
    var src_6 = src.randomPassword;

    exports.capitalize = src_1;
    exports.coinToss = src_3;
    exports["default"] = src;
    exports.diceRoll = src_5;
    exports.randomColor = src_4;
    exports.randomNumber = src_2;
    exports.randomPassword = src_6;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

const index = require('../src/index.js');

test('randomNumber(1, 10) returns a number between 1 and 10', () => {
    const result = index.randomNumber(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
});

test('capitalize("hello") returns "Hello"', () => {
    const result = index.capitalize('hello');
    expect(result).toBe('Hello');
});

test('coinToss() returns either "Heads" or "Tails"', () => {
    const result = index.coinToss();
    expect(result).toMatch(/Heads|Tails/);
});

test('randomColor() returns a hex color', () => {
    const result = index.randomColor();
    expect(result).toMatch(/^#[0-9a-f]{6}$/i);
});

test('diceRoll() returns a number between 1 and 6', () => {
    const result = index.diceRoll();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
});

test('randomPassword() returns a string of length 8', () => {
    const result = index.randomPassword(8);
    expect(result.length).toBe(8);
});

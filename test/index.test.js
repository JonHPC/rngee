const index = require('../src/index');

test('randomNumber(1, 10) returns a number between 1 and 10', () => {
    const result = index.randomNumber(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
    expect(Array.isArray(result)).toBe(false);
});

test('randomNumber(1, 10, 2) returns two numbers between 1 and 10 in an array', () => {
    const result = index.randomNumber(1, 10, 2);
    expect(result).toHaveLength(2);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toBeGreaterThanOrEqual(1);
    expect(result[0]).toBeLessThanOrEqual(10);
    expect(result[1]).toBeGreaterThanOrEqual(1);
    expect(result[1]).toBeLessThanOrEqual(10);
});

test('randomNumber(-1, 20, -3) throws an error', () => {
    expect(() => {
        index.randomNumber(-1, 20, -3);
    }).toThrow();
});

test('coinToss() returns either "Heads" or "Tails" once', () => {
    const result = index.coinToss();
    expect(result).toMatch(/Heads|Tails/);
    expect(Array.isArray(result)).toBe(false);
});

test('coinToss(3) returns an array of 3 coin tosses', () => {
    const result = index.coinToss(3);
    expect(result).toHaveLength(3);
    expect(Array.isArray(result)).toBe(true);
});

test('coinToss(1, "Up", "Down") returns either "Up" or "Down" once', () => {
    const result = index.coinToss(1, 'Up', 'Down');
    expect(result).toMatch(/Up|Down/);
    expect(Array.isArray(result)).toBe(false);
});

test('randomColor() returns a hex color', () => {
    const result = index.randomColor();
    expect(result).toMatch(/^#[0-9a-f]{6}$/i);
    expect(Array.isArray(result)).toBe(false);
});

test('randomColor("hex") returns a hex color', () => {
    const result = index.randomColor('hex');
    expect(result).toMatch(/^#[0-9a-f]{6}$/i);
    expect(Array.isArray(result)).toBe(false);
});

test('randomColor("rgb") returns an rgb color', () => {
    const result = index.randomColor('rgb');
    expect(result).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
    expect(Array.isArray(result)).toBe(false);
});

test('randomColor("bad") throws an error', () => {
    expect(() => {
        index.randomColor('bad');
    }).toThrow();
});

test('diceRoll() returns a number between 1 and 6', () => {
    const result = index.diceRoll();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
    expect(Array.isArray(result)).toBe(false);
});

test('diceRoll(3) returns an array of 3 numbers between 1 and 6', () => {
    const result = index.diceRoll(3);
    expect(result[0]).toBeGreaterThanOrEqual(1);
    expect(result[0]).toBeLessThanOrEqual(6);
    expect(result[1]).toBeGreaterThanOrEqual(1);
    expect(result[1]).toBeLessThanOrEqual(6);
    expect(result[2]).toBeGreaterThanOrEqual(1);
    expect(result[2]).toBeLessThanOrEqual(6);
    expect(result).toHaveLength(3);
    expect(Array.isArray(result)).toBe(true);
});

test('diceRoll(3, 20) returns an array of 3 numbers between 1 and 20', () => {
    const result = index.diceRoll(3);
    expect(result[0]).toBeGreaterThanOrEqual(1);
    expect(result[0]).toBeLessThanOrEqual(20);
    expect(result[1]).toBeGreaterThanOrEqual(1);
    expect(result[1]).toBeLessThanOrEqual(20);
    expect(result[2]).toBeGreaterThanOrEqual(1);
    expect(result[2]).toBeLessThanOrEqual(20);
    expect(result).toHaveLength(3);
    expect(Array.isArray(result)).toBe(true);
});

test('randomString() returns a string of length 8', () => {
    const result = index.randomString(8);
    expect(result.length).toBe(8);
    expect(Array.isArray(result)).toBe(false);
});

test('randomString(12) returns a string of length 12', () => {
    const result = index.randomString(12);
    expect(result.length).toBe(12);
    expect(Array.isArray(result)).toBe(false);
});

test('randomString(12, true, false, false, false) returns a string of length 12 with only lowercase letters', () => {
    const result = index.randomString(12, true, false, false, false);
    expect(result.length).toBe(12);
    expect(result).toMatch(/^[a-z]{12}$/);
    expect(Array.isArray(result)).toBe(false);
});

test('randomString(12, false, true, false, false) returns a string of length 12 with only uppercase letters', () => {
    const result = index.randomString(12, false, true, false, false);
    expect(result.length).toBe(12);
    expect(result).toMatch(/^[A-Z]{12}$/);
    expect(Array.isArray(result)).toBe(false);
});

test('randomString(12, false, false, true, false) returns a string of length 12 with only numbers', () => {
    const result = index.randomString(12, false, false, true, false);
    expect(result.length).toBe(12);
    expect(result).toMatch(/^[0-9]{12}$/);
    expect(Array.isArray(result)).toBe(false);
});

test('randomString(12, false, false, false, true) returns a string of length 12 with only symbols', () => {
    const result = index.randomString(12, false, false, false, true);
    expect(result.length).toBe(12);
    expect(result).toMatch(/^[!@#$%^&*()_+-={};:<>,./?]{12}$/);
    expect(Array.isArray(result)).toBe(false);
});

test('randomString(12, true, true, true, true) returns a string of length 12 with lowercase, uppercase, numbers, and symbols', () => {
    const result = index.randomString(12, true, true, true, true);
    expect(result.length).toBe(12);
    expect(result).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+-={};:<>,./?]{12}$/);
    expect(Array.isArray(result)).toBe(false);
});

test('randomString(12, false, false, false, false) throws an error', () => {
    expect(() => {
        index.randomString(12, false, false, false, false);
    }).toThrow();
});

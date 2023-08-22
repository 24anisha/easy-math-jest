// arithmetic.test.js

const calculator = require('../src/arithmetic')
;

describe('Math Functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('multiplies 4 * 6 to equal 24', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");

  });
});


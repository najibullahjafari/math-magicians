// calculator.test.js

import {
  add, subtract, multiply, divide,
} from '../component/calculator';

describe('Calculator Functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 5)).toBe(4);
    expect(add(0, 0)).toBe(0);
  });

  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(-1, -5)).toBe(4);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0, 10)).toBe(0);
  });

  it('should divide two numbers correctly', () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(10, -2)).toBe(-5);
    expect(divide(0, 5)).toBe(0);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrowError('Cannot divide by zero.');
    expect(() => divide(100, 0)).toThrowError('Cannot divide by zero.');
  });
});

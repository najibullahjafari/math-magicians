// Addition
export function add(a, b) {
  return a + b;
}

// Subtraction
export function subtract(a, b) {
  return a - b;
}

// Multiplication
export function multiply(a, b) {
  return a * b;
}

// Division
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
}

import operate from '../logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('should subtract two numbers', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  it('should multiply two numbers', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });

  it('should divide two numbers', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });

  it('should return error if dividing by zero', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('should return modulo of two numbers', () => {
    expect(operate(1, 2, '%')).toBe('1');
  });

  it('should return error if modulo by zero', () => {
    expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error if the operation is not valid', () => {
    expect(() => operate(1, 2, 'invalid')).toThrow(
      Error("Unknown operation 'invalid'"),
    );
  });
});

import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '-' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle number buttons', () => {
    const result1 = calculate({ total: '10', operation: '-' }, '0');
    expect(result1).toEqual({ next: '0', total: '10', operation: '-' });

    const result2 = calculate({ next: '3.14' }, '8');
    expect(result2).toEqual({ next: '3.148', total: null });
  });

  it('should handle decimal point button', () => {
    const result1 = calculate({ next: '5' }, '.');
    expect(result1).toEqual({ next: '5.' });

    const result2 = calculate({ next: '3.14' }, '.');
    expect(result2).toEqual({ next: '3.14' });
  });
  it('should handle equals button', () => {
    const result1 = calculate({ total: '10', operation: '+' }, '5');
    expect(result1).toEqual({ next: '5', total: '10', operation: '+' });

    const result2 = calculate({ total: '10', operation: '+', next: '5' }, '=');
    expect(result2).toEqual({ total: '15', next: null, operation: null });
  });

  it('should handle +/- button', () => {
    const result1 = calculate({ next: '5' }, '+/-');
    expect(result1).toEqual({ next: '-5' });

    const result2 = calculate({ total: '10' }, '+/-');
    expect(result2).toEqual({ total: '-10' });
  });
});

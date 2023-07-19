import React, { useState } from 'react';
import '../css/calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [preScreen, setPreScreen] = useState('');
  const [curScreen, setCurScreen] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleButtonClick = (buttonName) => {
    if (
      buttonName === 'x'
      || buttonName === '+'
      || buttonName === '-'
      || buttonName === '÷'
    ) {
      // Check if the current screen value is not a number
      if (Number.isNaN(Number(curScreen))) {
        return;
      }
    }
    const result = calculate(
      { total: preScreen, next: curScreen, operation },
      buttonName,
    );
    setPreScreen(result.total || '');
    setCurScreen(result.next || '0');
    setOperation(result.operation || null);
  };

  return (
    <div className="cal-page">
      <h4 className="calculator-header">lets do some calculations!</h4>
      <div className="cal-container">
        <div className="cal-screen">
          <div className="pre-screen">{preScreen}</div>
          <div className="cur-screen">{curScreen}</div>
        </div>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('AC')}
        >
          AC
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('+/-')}
        >
          +/-
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('%')}
        >
          %
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('÷')}
        >
          ÷
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('7')}
        >
          7
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('8')}
        >
          8
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('9')}
        >
          9
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('x')}
        >
          *
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('4')}
        >
          4
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('5')}
        >
          5
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('6')}
        >
          6
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('-')}
        >
          -
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('1')}
        >
          1
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('2')}
        >
          2
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('3')}
        >
          3
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('+')}
        >
          +
        </button>
        <button
          className="cal-batn cal-batn-zero"
          type="button"
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button
          className="cal-batn"
          type="button"
          onClick={() => handleButtonClick('.')}
        >
          .
        </button>
        <button
          className="cal-batn btn-equal"
          type="button"
          onClick={() => handleButtonClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;

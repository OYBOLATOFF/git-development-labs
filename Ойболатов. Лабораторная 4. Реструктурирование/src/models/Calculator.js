// Calculator.js
import React, { useState } from 'react';
import '../Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    setInput((prevInput) => input == '0' ? value : prevInput + value);
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="Calculator">
      <div className="Input">{input}</div>
      <div className="Buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleCalculate()}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;

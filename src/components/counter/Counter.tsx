import React from 'react';
import "./Counter.css"

interface CounterProps {
  count: number;
  onCountChange: (newCount: number) => void;
}

export const Counter: React.FC<CounterProps> = ({ count, onCountChange }) => {
  return (
    <div className="counter-container">
      <button 
        className="counter-button" 
        onClick={() => {
          if (count > 0) {
            onCountChange(count - 1); // Llama a la función onCountChange con el nuevo valor
          }
        }}
      >
        -
      </button>
      <div className="counter-value">{count}</div>
      <button 
        className="counter-button" 
        onClick={() => onCountChange(count + 1)} // Llama a la función onCountChange con el nuevo valor
      >
        +
      </button>
    </div>
  );
};


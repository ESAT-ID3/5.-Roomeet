import React from 'react';
import "./Counter.css"

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  return (
    <div className="counter-container">
      <button className="counter-button" onClick={() => {
        if (count === 0) {
          return;
        }
        setCount(count - 1)}}>-</button>
      <div className="counter-value">{count}</div>
      <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};


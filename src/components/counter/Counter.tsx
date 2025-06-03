import React, { useState } from 'react';
import './Counter.css';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

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

import React from 'react';
import './MinMaxInput.css';

export const MinMaxInput: React.FC = () => {
  return (
    <div className="min-max-wrapper">
      <input type="text" placeholder="Min" className="min-max-input" />
      <input type="text" placeholder="Max" className="min-max-input" />
    </div>
  );
};


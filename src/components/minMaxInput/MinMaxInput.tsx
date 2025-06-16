import React from 'react';
import './MinMaxInput.css';

export const MinMaxInput: React.FC = () => {
  return (
    <div className="min-max-wrapper">
      <input type="number" min="0" placeholder="Presupuesto mínimo (€)" className="min-max-input" />
      <input type="number" min="0" placeholder="Presupuesto máximo (€)" className="min-max-input" />
    </div>
  );
};


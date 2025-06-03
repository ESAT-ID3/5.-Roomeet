import React from 'react';
import './ItemToCheck.css';

interface ItemToCheckProps {
  label: string;
  value: string; // Un valor único para cada checkbox
  checked: boolean;
  onChange: (value: string) => void; // Función que cambia el estado en el componente padre
}

export const ItemToCheck: React.FC<ItemToCheckProps> = ({ label, value, checked, onChange }) => {

  const toggleCheck = () => {
    onChange(value); // Cambia el estado en el componente padre
  };

  return (
    <div className="item-to-check" onClick={toggleCheck}>
      <div className={`checkbox ${checked ? 'checked' : ''}`}>
        {checked && (
          <svg
            className="checkmark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span className="label">{label}</span>
    </div>
  );
};

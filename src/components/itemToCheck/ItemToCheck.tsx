import React, { useState } from 'react';
import './ItemToCheck.css';

interface ItemToCheckProps {
  label: string;
  defaultChecked?: boolean;
}

export const ItemToCheck: React.FC<ItemToCheckProps> = ({ label, defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const toggleCheck = () => setChecked(!checked);

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



import React, { useState } from 'react';
import './TextToogle.css';

 interface TextToggleProps {
  label: string;
  defaultChecked?: boolean;
}

export const TextToogle: React.FC<TextToggleProps> = ({ label, defaultChecked = false }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="text-toggle-wrapper">
      <span className="toggle-label">{label}</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="slider" />
      </label>
    </div>
  );
};


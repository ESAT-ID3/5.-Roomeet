import "./Checkboxes.css"
import React, { useState } from 'react';
import { ItemToCheck } from '../ItemToCheck';

export const Checkboxes = () => {
  const [selected, setSelected] = useState<string | null>(null); // El estado que guarda el valor del checkbox seleccionado

  const handleCheckChange = (value: string) => {
    // Si ya está seleccionado, lo deseleccionamos
    setSelected(selected === value ? null : value);
  };

  return (
    <div className='checkboxes-container'>
      <div>
        <ItemToCheck
          label="Sí"
          value="option1"
          checked={selected === 'option1'}
          onChange={handleCheckChange}
        />
      </div>
      <div>
      <ItemToCheck
        label="No"
        value="option2"
        checked={selected === 'option2'}
        onChange={handleCheckChange}
      />
      </div>
    </div>
  );
};

export default Checkboxes;

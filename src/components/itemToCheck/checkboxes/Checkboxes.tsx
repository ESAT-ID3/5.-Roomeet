import React, { useState } from 'react';
import { ItemToCheck } from '../ItemToCheck';

export const Checkboxes = () => {
  const [selected, setSelected] = useState<string | null>(null); // El estado que guarda el valor del checkbox seleccionado

  const handleCheckChange = (value: string) => {
    // Si ya está seleccionado, lo deseleccionamos
    setSelected(selected === value ? null : value);
  };

  return (
    <div>
      <ItemToCheck
        label="Option 1"
        value="option1"
        checked={selected === 'option1'}
        onChange={handleCheckChange}
      />
      <ItemToCheck
        label="Option 2"
        value="option2"
        checked={selected === 'option2'}
        onChange={handleCheckChange}
      />
    </div>
  );
};

export default Checkboxes;

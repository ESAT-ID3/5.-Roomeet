import React, { useState } from 'react';
import './ToogleAnualMensual.css';

type PaymentOption = 'Mensual' | 'Anual';

export const ToogleAnualMensual: React.FC = () => {
  const [selected, setSelected] = useState<PaymentOption>('Mensual');

  return (
    <div className="toggle-wrapper">
      <div className="toggle-container">
        {/* Deslizador */}
        <div
          className={`toggle-slider ${selected === 'Mensual' ? 'left' : 'right'}`}
        ></div>

        {/* Opciones */}
        <button
          className={`toggle-button ${selected === 'Mensual' ? 'active' : ''}`}
          onClick={() => setSelected('Mensual')}
        >
          Mensual
        </button>
        <button
          className={`toggle-button ${selected === 'Anual' ? 'active' : ''}`}
          onClick={() => setSelected('Anual')}
        >
          Anual
        </button>
      </div>
    </div>
  );
};



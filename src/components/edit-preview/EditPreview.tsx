import React, { useState } from 'react';
import './EditPreview.css';

interface ComponenteAProps {
  onMostrarB: () => void;
  onMostrarC: () => void;
}

export const EditPreview: React.FC<ComponenteAProps> = ({ onMostrarB, onMostrarC }) => {
  const [active, setActive] = useState<'edit' | 'preview'>('preview');

  return (
    <div className="toggle-container">
      <button
        className={`toggle-button edit_preview__separator ${active === 'edit' ? 'active' : ''}`}
        onClick={() => {
        setActive('edit');
        onMostrarB();
}}
      >
        Edit
      </button>
      <button
        className={`toggle-button ${active === 'preview' ? 'active' : ''}`}
        onClick={() => {
          setActive('preview');
          onMostrarC();
        }}
      >
        Preview
      </button>
    </div>
  );
};




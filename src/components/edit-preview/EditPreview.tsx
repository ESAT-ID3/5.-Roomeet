import React, { useState } from 'react';
import './EditPreview.css';

export const EditPreview: React.FC = () => {
  const [active, setActive] = useState<'edit' | 'preview'>('preview');

  return (
    <div className="toggle-container">
      <button
        className={`toggle-button edit_preview__separator ${active === 'edit' ? 'active' : ''}`}
        onClick={() => setActive('edit')}
      >
        Edit
      </button>
      <button
        className={`toggle-button ${active === 'preview' ? 'active' : ''}`}
        onClick={() => setActive('preview')}
      >
        Preview
      </button>
    </div>
  );
};




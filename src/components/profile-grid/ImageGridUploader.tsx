import React, { useState } from 'react';
import './ImageGridUploader.css'; // Asegúrate de que la ruta coincida con tu proyecto
import { Button } from '../button/Button';
import image from "../../assets/images/img_placeholder_default.png"

const MAX_IMAGES = 9;

export const ImageGridUploader: React.FC = () => {
  const [images, setImages] = useState<(string | null)[]>(Array(MAX_IMAGES).fill(null));

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImages = [...images];
      newImages[index] = imageUrl;
      setImages(newImages);
    }
  };

  const handleRemove = (index: number): void => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  const triggerInput = (index: number): void => {
    const input = document.getElementById(`fileInput-${index}`) as HTMLInputElement | null;
    if (input) {
      input.click();
    }
  };

  return (
    <div className="image-grid-container">
      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-tile">
            <img
              src={img || 'https://via.placeholder.com/112x112?text=Imagen'}
              alt={`imagen-${index}`}
            />

            {img ? (
              <button
                onClick={() => handleRemove(index)}
                className="image-button remove"
                aria-label="Eliminar imagen"
              >
                ×
              </button>
            ) : (
              <button
                onClick={() => triggerInput(index)}
                className="image-button add"
                aria-label="Añadir imagen"
              >
                +
              </button>
            )}

            <input
              type="file"
              id={`fileInput-${index}`}
              accept="image/*"
              onChange={(e) => handleImageChange(e, index)}
              style={{ display: 'none' }}
            />
          </div>
        ))}
      </div>

      <p className="helper-text">
        ¿Tu vibe? ¿Tu día a día? Sube fotos que lo cuenten.
      </p>

      <Button text="Añade fotos" color='black'/>
    </div>
  );
};


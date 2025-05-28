import React from 'react';
import './RoomCard.css';
import { Icons } from '../icons/Icons';

export const RoomCard: React.FC = () => {
  return (
    <div className="room-card">
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        alt="Room"
        className="room-image"
      />
      <span className="room-label">Perfil de piso</span>
      <button className="edit-button">
        <Icons name= 'edit'/>
      </button>
    </div>
  );
};



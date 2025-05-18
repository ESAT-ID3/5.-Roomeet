// ChatInput.tsx
import React from "react";
import './ChatInput.css'

interface ChatInputProps {
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ placeholder = "Escribe un mensaje..." }) => {
  return (
    <div className="chat-input-layout">
      <input className="chat-input-text" type="text" placeholder={placeholder} />
      <div className="chat-input-icon" aria-label="Enviar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 20V14L11 12L3 10V4L22 12L3 20Z" fill="#202020"/>
        </svg>
      </div>
    </div>
  );
};

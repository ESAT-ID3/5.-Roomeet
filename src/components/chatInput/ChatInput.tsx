// ChatInput.tsx
import React, { useState, KeyboardEvent } from "react";
import './ChatInput.css'

interface ChatInputProps {
  placeholder?: string;
  onSend: (message: string) => void; // función que viene del padre
}

export const ChatInput: React.FC<ChatInputProps> = ({ placeholder = "Escribe un mensaje...", onSend }) => {
  const [inputValue, setInputValue] = useState("");

const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      onSend(inputValue.trim());
      setInputValue(""); // limpia el input
    }
  };

  return (
    <div className="chat_input__container">
      <div className="chat_input__content">
        <input 
        className="chat-input-text" 
        type="text" 
        placeholder={placeholder} 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <div className="chat-input-icon" aria-label="Enviar"
        onClick={() => {
            if (inputValue.trim() !== "") {
              onSend(inputValue.trim());
              setInputValue("");
            }
          }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 20V14L11 12L3 10V4L22 12L3 20Z" fill="#202020"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

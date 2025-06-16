import "./UserCard.css"
import { useState } from "react";

interface UserType {
    name: string,
    age?: number,
    tags?: string[],
    onSwipe?: () => void;
    img?: string; // Añadido para la imagen del usuario
    onCardClick?: () => void;
  }

export const UserCard = ({name,age,tags, onCardClick, onSwipe, img = "https://img.freepik.com/foto-gratis/feliz-mujer-pie-jardin-flores_23-2148029561.jpg?t=st=1750031813~exp=1750035413~hmac=be55e7ee41a6fe399b56bd9f89f1c7d231542b7352cf76064511ff98fec52230&w=2000"}:UserType) => {

  const [swipeRight, setSwipeRight] = useState(false);
  const [swipeLeft, setSwipeLeft] = useState(false);

  const handleSwipeRight = () => {
  setSwipeRight(true);

    if (onSwipe) onSwipe(); // ✅ notifica al padre
};

const handleSwipeLeft = () => {
  setSwipeLeft(true);
  if (onSwipe) onSwipe();
};

  return (

      <div className={`user_card ${swipeRight ? "swipe-right" : ""} ${swipeLeft ? "swipe-left" : ""}`}
      onClick={onCardClick}
      style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${img})` }}>
        <div className="user_description">
            <div className="user_title">{name} · {age}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M23 12L20.56 9.22004L20.9 5.54004L17.29 4.72004L15.4 1.54004L12 3.00004L8.6 1.54004L6.71 4.72004L3.1 5.53004L3.44 9.21004L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58004L18 9.00004L10 17Z" fill="#58C0FD"/>
            </svg>
            </div>
            <div className="user_tags">
                {tags && tags.length > 0 ? (
                  tags.map((tag, idx) => (
                    <div className="tag" key={idx}>{tag}</div>
                  ))
                ) : (
                  <div className="tag">Sin etiquetas</div>
                )}
            </div>        
        </div>
        <div className="swipe_buttons">
                <button className="purple_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 31" fill="none">
                <path d="M25.0002 12.5462V17.5462H13.7502L18.1252 21.9212L15.1002 24.9462L5.2002 15.0462L15.1002 5.14624L18.1252 8.17124L13.7502 12.5462H25.0002Z" fill="#7B64D4"/>
                </svg>
                </button>
                <button
  className="red_btn"
  onClick={(e) => {
    e.stopPropagation(); // ⛔ evita la propagación hacia el Link
    handleSwipeLeft();
  }}
>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                <path d="M30.0335 10.077L25.7898 5.83325L18.3669 13.2562L10.9439 5.83325L6.7002 10.077L14.1231 17.4999L6.7002 24.9228L10.9439 29.1666L18.3669 21.7437L25.7898 29.1666L30.0335 24.9228L22.6106 17.4999L30.0335 10.077Z" fill="#F74B4B"/>
                </svg>
                </button>
                <button className="blue_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 36 36" fill="none">
                <path d="M18.3255 25.2316L27.338 30.6712L24.9464 20.4191L32.9089 13.5212L22.4234 12.6171L18.3255 2.96289L14.2276 12.6171L3.74219 13.5212L11.6901 20.4191L9.31302 30.6712L18.3255 25.2316Z" fill="#58C0FD"/>
                </svg>
                </button>
                <button
  className="yellow_btn"
  onClick={(e) => {
    e.stopPropagation();
    handleSwipeRight();
  }}
>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#FBAD37"/>
                </svg>
                </button>
                <button className="purple_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V22L6 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V4C22 2.89 21.1 2 20 2Z" fill="#7B64D4"/>
                </svg>
                </button>
            </div>
            
        
      </div>

  )
}
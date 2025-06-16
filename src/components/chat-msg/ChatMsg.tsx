import { JSX } from "react";
import "./ChatMsg.css";

type ChatMsgProps = {
  name: string;
  message: string;
  img: string;
  time: string;
  notifications: number;
  onClick?: () => void;
};

export const ChatMsg = ({ name, message, img, time, notifications, onClick}: ChatMsgProps): JSX.Element => {
  return (
    <div className="msg_container" onClick={onClick}>
      <div className="img_text">
        <div className="chat_img" style={{backgroundImage: `url(${img})`}}></div> 
        <div className="chat_text"> 
          <p style={{ fontWeight: 700 }}>{name}</p>
          <p>{message}</p>
        </div>
      </div> 
      <div className="chat_info"> 
        <p style={{ fontWeight: 300, color: "#ADAFBB" }}>{time}</p>
        <div>
          <p style={{ fontWeight: 700 }}>{notifications}</p>
        </div>
      </div> 
    </div>
  );
};

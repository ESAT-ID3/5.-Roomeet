import { JSX } from "react";
import "./ChatMsg.css";
import { img } from "framer-motion/client";

interface ChatMsgProps {
  name: string;
  message: string;
  img: string
}

export const ChatMsg = ({ name, message, img }: ChatMsgProps): JSX.Element => {
  return (
    <div className="msg_container">
      <div className="img_text">
        <div className="chat_img" style={{backgroundImage: `url(${img})`}}></div> 
        <div className="chat_text"> 
          <p style={{ fontWeight: 700 }}>{name}</p>
          <p>{message}</p>
        </div>
      </div> 
      <div className="chat_info"> 
        <p style={{ fontWeight: 300, color: "#ADAFBB" }}>23 min</p>
        <div>
          <p style={{ fontWeight: 700 }}>1</p>
        </div>
      </div> 
    </div>
  );
};

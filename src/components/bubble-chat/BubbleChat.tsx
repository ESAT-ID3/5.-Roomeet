import { div } from "framer-motion/client"
import "./BubbleChat.css"

export const BubbleChat = ({hour}) => {

    return (
    <div className="bubble_container">
        <div className="bubble">
            <p>Placegfdgdfgdfdgdfgdfdgdfgfholder</p>
        </div>
        {hour && <p className="bubble_time">00:00</p>}
    </div>
    );
  };
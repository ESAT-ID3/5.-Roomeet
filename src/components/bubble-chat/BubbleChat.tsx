
import "./BubbleChat.css"

interface BubbleChatProps {
  hour?: string; // Indica si se muestra la hora
    color: "grey" | "yellow"; // Define el color de la burbuja
    text: string; // Texto del mensaje
}

export const BubbleChat = ({hour, color, text}:BubbleChatProps) => {

    return (
    <div className={`bubble_container ${color ==="grey" ? 'left' : ''}`}>
        <div className={`${color ==="grey" ? 'bubble_grey' : 'bubble_yellow'}`}>
            <p>{text}</p>
        </div>
        {hour && <p className="bubble_time">{hour}</p>}
    </div>
    );
  };
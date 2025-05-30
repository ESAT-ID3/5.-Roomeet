import "./ChatMsg.css"

export const ChatMsg = () => {

    return (
      <div className="msg_container">
        <div className="img_text">
          <div className="chat_img">{/* Meter aquí la imagen */}</div> 
          <div className="chat_text"> 
            <p style={{ fontWeight: 700 }}>Sara{/* Meter el nombre del usuario */}</p>
            <p>¿Por cuál zona buscas piso?{/* Meter el último mensaje del usuario */}</p>
          </div>
        </div> 
        <div className="chat_info"> 
          <p style={{ fontWeight: 300, color: "#ADAFBB" }}>23 min{/* Meter el minuto desde el último mensaje del usuario */}</p>
          <div>
            <p style={{ fontWeight: 700 }}>1 {/* Meter el nº de mensajes nuevos sin leer*/}</p>
          </div>
          
        </div> 
      </div>
    );
  };
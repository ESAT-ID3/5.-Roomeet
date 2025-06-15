
import { SearchBarChats } from "../searchBarChats/SearchBarChats";
import { ChatMsg } from "../chat-msg/ChatMsg";
import { CarrouselMatches } from "../carrousel-matches/CarrouselMatches";
import { useState } from "react";
import "./Chats.css";
import { HeaderChat } from "../header-chat/HeaderChat";
import { ChatInput } from "../chatInput/ChatInput";
import { BubbleChat } from "../bubble-chat/BubbleChat";

export const Chats = () => {

  const [activeChat, setActiveChat] = useState(false);

const people = [
  { name: "Sara", message: "¡Estás buscando por la zona del Cabañal? 😋", img:"https://content.semana.es/medio/2024/01/08/sara-salamo_00000000_240305124008_800x450.jpg", time:"2 min", notifications:2 },
  { name: "Lucas", message: "¿Qué tal va todo? 😊", img:"https://purodiseno.lat/wp-content/uploads/2021/06/LUCA-DESTACADA.png", time:"23 min", notifications:6 },
  { name: "Aitana", message: "He visto que también estás buscando piso por Malvarrosa, ¿no? 🏠", img:"https://d30gl8nkrjm6kp.cloudfront.net/articulos/articulos-1669872.jpg", time:"54 min", notifications:1 },
  { name: "Idel", message: "Abrimos los apuntes de Wordpress por la página 1052 🔥", img:"https://cdn.discordapp.com/avatars/1194355408668737608/27edafc7cbb8347b3b5d7e2010f8dc1b.webp?size=240", time:"7 min", notifications:9 },
  { name: "Ruperto", message: "¡Mira mamá, salgo en una presentación final! 🤩", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8k8tZ3PiHuAmniQqPM7O7KwhjfaNgwO0CzieYpMyge2wT8f1KnpxpYIZKIYcw7vEpOY&usqp=CAU", time:"1h", notifications:8 },
  { name: "Wakkos", message: "Lo primero de todo, usad box-sizing: border-box 🔳", img:"https://cdn.discordapp.com/avatars/324992266953293824/76bd1a8d17adff4d60a1579279c2e5e4.webp?size=128", time:"52 min", notifications:3 },
  { name: "Diego", message: "A ver esos auto-layouts 👀", img:"https://cdn.discordapp.com/avatars/360154231120068618/c6f18284e8c1294d1676b1480ecb1a90.webp?size=240", time:"1 min", notifications:4 },
  { name: "Josmi", message: "Bita, íbamos por el vídeo 952, ¿no? 🫃", img:"https://cdn.discordapp.com/avatars/253466013394403328/4c5789d8904a2b8524f619734a09f944.webp?size=240", time:"12 min", notifications:2 },
  { name: "Sara", message: "¡Hola! ¿Cómo estás? 🥰", img:"https://content.semana.es/medio/2024/01/08/sara-salamo_00000000_240305124008_800x450.jpg", time:"23 min", notifications:1 },
  
];

const handleSendMessage = (message: string) => {
    console.log("Mensaje enviado:", message);
    setMessage(message);
    // Aquí puedes actualizar el estado de la conversación o enviarlo a Firebase, etc.
  };

  const [message, setMessage] = useState("");

  return (
    <div className="chats_container">

      

      {activeChat && (
      <>
      <div className="inside_chat__container">
        <div>
          <HeaderChat name="Sara" pic1="https://content.semana.es/medio/2024/01/08/sara-salamo_00000000_240305124008_800x450.jpg" onCloseChat={() => setActiveChat(false)}/>
          <div>
          <BubbleChat text="Holaa, soy Ruperto, ¡encantado!" color="yellow" hour="17:02"/>
          <BubbleChat text="Hey!" color="grey" hour="17:12"/>
          <BubbleChat text="¿Estás buscando por la zona del Cabañal? 😋 " color="grey" hour="17:13"/>
          {message && <BubbleChat text={message} color="yellow" hour="17:13"/>}
          </div>
        </div>
        
        <div className="inside_chat__text_input">
          <ChatInput onSend={handleSendMessage}/>
        </div>
        
      </div>
      </> 
      )}

      {!activeChat && (
      <>
      <div className="carroussel_matches__container">
      <CarrouselMatches />
      </div>
      
      <SearchBarChats />
      <div className="chats_preview">
      {people.map((user, index) => (
        <ChatMsg key={index} name={user.name} message ={user.message} img = {user.img} time={user.time} notifications={user.notifications} 
        onClick={() => {
          setActiveChat(true);
        }}/>
      ))}
      </div>
      </> 
      )}
    </div>
  );
};


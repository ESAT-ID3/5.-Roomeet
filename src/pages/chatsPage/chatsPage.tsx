
import { MessageHeader } from "../../components/messageHeader/MessageHeader";
import { SearchBarChats } from "../../components/searchBarChats/SearchBarChats";
import { ChatMsg } from "../../components/chat-msg/ChatMsg";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import "./ChatsPage.css";

export const ChatsPage = () => {

const people = [
  { name: "Sara", message: "¡Hola! ¿Cómo estás? 🥰", img:"https://content.semana.es/medio/2024/01/08/sara-salamo_00000000_240305124008_800x450.jpg" },
  { name: "Lucas", message: "¿Qué tal va todo? 😊", img:"https://purodiseno.lat/wp-content/uploads/2021/06/LUCA-DESTACADA.png" },
  { name: "Aitana", message: "He visto que también estás buscando piso por Malvarrosa, ¿no? 🏠", img:"https://d30gl8nkrjm6kp.cloudfront.net/articulos/articulos-1669872.jpg" },
  { name: "Carlos", message: "Serían 400€ si fuesemos 4 personas 💸", img:"https://upload.wikimedia.org/wikipedia/commons/9/95/Ministru_prezidents_Valdis_Dombrovskis_ofici%C4%81l%C4%81s_pusdien%C4%81s_tiekas_ar_Sp%C4%81nijas_karali_Huanu_Karlosu_I_un_karalieni_Sofiju_%283506936051%29_%28cropped%29.jpg" },
  { name: "Ruperto", message: "¡Mira mamá, salgo en una presentación final! 🤩", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8k8tZ3PiHuAmniQqPM7O7KwhjfaNgwO0CzieYpMyge2wT8f1KnpxpYIZKIYcw7vEpOY&usqp=CAU" },
  { name: "Wakkos", message: "Lo primero de todo, usad box-sizing: border-box 🔳", img:"https://cdn.discordapp.com/avatars/324992266953293824/76bd1a8d17adff4d60a1579279c2e5e4.webp?size=128" },
  { name: "Diego", message: "A ver esos auto-layouts 👀", img:"https://cdn.discordapp.com/avatars/360154231120068618/c6f18284e8c1294d1676b1480ecb1a90.webp?size=240" },
  { name: "Josmi", message: "Bita, íbamos por el vídeo 952, ¿no? 🫃", img:"https://cdn.discordapp.com/avatars/253466013394403328/4c5789d8904a2b8524f619734a09f944.webp?size=240" },
  { name: "Idel", message: "Abrimos los apuntes de Wordpress por la página 1052 🔥", img:"https://cdn.discordapp.com/avatars/1194355408668737608/27edafc7cbb8347b3b5d7e2010f8dc1b.webp?size=240" }
];

  return (
    <div className="chats-container">
      <SwipeNavHeader/>
      <MessageHeader />
      <SearchBarChats />
      {people.map((user, index, img) => (
        <ChatMsg key={index} name={user.name} message ={user.message} img = {user.img} />
      ))}
    </div>
  );
};


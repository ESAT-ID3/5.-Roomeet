import "./HeaderChat.css";
import { Icons } from "../icons/Icons";

interface HeaderChatProps {
    pic1: string; // URL de la imagen del perfil
    name: string; // Nombre del usuario
}

export const HeaderChat = ({pic1, name}:HeaderChatProps) => {
    
    return (
        <div className="header_chat__container">
            <Icons name="chevron" size="36" color="black" viewBox="0 0 24 24"/>
            <div className="header_chat_picture" style={{
            backgroundImage: `url(${pic1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}></div>
            <h1>{name}</h1>
            <Icons name="dots" size="36" color="black" viewBox="0 0 24 24"/>
        </div>
    );
};
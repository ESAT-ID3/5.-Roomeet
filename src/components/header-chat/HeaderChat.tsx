import "./HeaderChat.css";
import { Icons } from "../icons/Icons";

export const HeaderChat = ({pic1, name}) => {
    
    return (
        <div className="header_chat__container">
            <Icons name="chevron" size="36" color="black" viewBox="0 0 24 24"/>
            <div className="header_chat_picture" style={{
            backgroundImage: `url(${pic1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}></div>
            <h1>Sara</h1>
            <Icons name="dots" size="36" color="black" viewBox="0 0 24 24"/>
        </div>
    );
};
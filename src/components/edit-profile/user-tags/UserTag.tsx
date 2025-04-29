import "./UserTag.css"
import { Icons } from "../../icons/Icons";

export const UserTag = () => {

    return (
        <div className="user_tag_container">
            <p>Etiqueta</p> {/*Cambiar este p por la etiqueta que haya elegido el usuario*/}
            <Icons name="cross" size="24" color="#A6A6A6"/> {/*Centrar esta X que está raruna*/}
        </div>
    );
};
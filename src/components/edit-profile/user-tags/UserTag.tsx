import "./UserTag.css"
import { Icons } from "../../icons/Icons";

export const UserTag = ({text}) => {

    return (
        <div className="user_tag_container">
            <p>{text}</p> {/*Cambiar este p por la etiqueta que haya elegido el usuario*/}
        </div>
    );
};
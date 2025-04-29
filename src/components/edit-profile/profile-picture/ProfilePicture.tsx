import "./ProfilePicture.css"
import { Icons } from "../../icons/Icons";

export const ProfilePicture = () => {

    return (
            <div className="profile_picture"> {/*Añadir variable para cambiar imagen de fondo del div según la foto de perfil del usuario*/}
                <div className="edit_container">
                    <Icons name="edit" size="24"/>
                </div> 
            </div>
    );
};
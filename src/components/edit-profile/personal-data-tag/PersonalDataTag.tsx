import "./PersonalDataTag.css"
import { Icons } from "../../icons/Icons";
import type { IconName } from "../../icons/Icons";

interface PersonalDataTagProps {
    text: string;
    icon: IconName;
    viewBox?: string; // Optional prop for viewBox, default is "0 0 26 26"
}

export const PersonalDataTag = ({text, icon, viewBox="0 0 26 26"}:PersonalDataTagProps) => {

    return (
    <div>
        <div className="tag_container"> {/*Insertar una variable de color de fondo para poder reutilizarlo en el perfil público*/}
            <Icons name={icon} size="24" viewBox={viewBox}/> {/*Cambiar este icono según el tag que sea*/}
            <p>{text}</p> {/*Cambiar este p por lo que haya escrito el usuario*/}
        </div>
    </div>
    );
};
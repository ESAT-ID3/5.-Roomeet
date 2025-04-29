import "./PersonalDataTag.css"
import { Icons } from "../../icons/Icons";

export const PersonalDataTag = () => {

    return (
    <div className="card_container">
        <div className="tag_container"> {/*Insertar una variable de color de fondo para poder reutilizarlo en el perfil público*/}
            <Icons name="gender" size="24"/> {/*Cambiar este icono según el tag que sea*/}
            <p>Mujer (ella)</p> {/*Cambiar este p por lo que haya escrito el usuario*/}
        </div>
    </div>
    );
};
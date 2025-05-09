import "./Select.css"
import { Icons } from "../icons/Icons";

export const Select = ({title}) => {

    return (
        <div className="select__container">
            <p>Género</p>
            <div className="select__flex">
                <select name="Genero">
                    <option value="">Hombre</option>
                    <option value="">Mujer</option>
                    <option value="">Otro</option>
                    <option value="">Prefiero no decirlo</option>
                </select>
            </div>
        </div>
    );
};
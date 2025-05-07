import "./Input.css"
import { Icons } from "../icons/Icons";

export const Input = ({name, icon1, icon2, viewBox, size}) => {

    return (
        <div className="input__container">
            <div className="input__flex">
                <p>{name}</p>
                <div className="input__box">
                    <Icons name={icon1} size={size} color="#202020" viewBox={viewBox}/>
                    <input type="text" />
                    {icon2 && <Icons name={icon2} size={size} color="#202020" viewBox={viewBox}/>} {/*De esta forma sino le pasamos la propiedad del icon2, React ignorará esta línea y es como si este div no existiera*/}
                </div>
            </div>
        </div>
    );
};
import "./Input.css"
import { Icons } from "../icons/Icons";

export const Input = ({name, icon1, icon2}) => {

    return (
        <div className="input__container">
            <div className="input__flex">
                <p>{name}</p>
                <div className="input__box">
                    <Icons name={icon1} size="36" color="#202020" viewBox="0 0 24 24"/>
                    <input type="text" />
                    <Icons name={icon2} size="36" color="#202020" viewBox="0 0 24 24"/>
                </div>
            </div>
        </div>
    );
};
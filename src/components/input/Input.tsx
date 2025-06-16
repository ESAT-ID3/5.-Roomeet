import "./Input.css"
import { Icons } from "../icons/Icons";
import { useState } from "react";

import type { IconName } from "../icons/Icons";

interface InputProps {
    name?: string;
    icon1?: IconName;
    icon2?: IconName; // icon2 is optional
    viewBox?: string;
    size?: string;
    type?: string; // type is optional, default is empty string
    placeholder?: string;
    password?: boolean;
    text?: boolean; // text is optional, default is false
    value?: string;
    email?: boolean; // email is optional, default is false
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({name, icon1, icon2="send", placeholder, viewBox, size, type, password, value, email, text, onChange}) => {

    const [inputValue, setInputValue] = useState("");

  

    return (
        <div className="input__container">
            <div className="input__flex">
                <p>{name}</p>
                <div className={`input__box ${type === "type_2" ? "type2" : ""}`}>
                    {type === "type_2" && <p>Aa</p>}
                    {type === "" && icon1 && <Icons name={icon1} size={size} color="#202020" viewBox={viewBox}/>}
                    {password && <input type="password" placeholder={placeholder} value={value}      // ✅ controlado por el padre
        onChange={onChange}/>}
                    {text && <input type="text" placeholder={placeholder} value={value}      // ✅ controlado por el padre
        onChange={onChange}/>}
                    {email && <input type="email" placeholder={placeholder} value={value}      // ✅ controlado por el padre
                    onChange={onChange}/>}
                    {icon2 && <Icons name={icon2} size={size} color="#202020" viewBox={viewBox}/>} {/*De esta forma sino le pasamos la propiedad del icon2, React ignorará esta línea y es como si este div no existiera*/}
                </div>
            </div>
        </div>
    );
};
import "./Register.css"

import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Social } from "../../components/social/Social";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

interface RegisterProps {
  onButtonClick?: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onButtonClick }) => {

    const [emptyInput, setEmptyInput] = useState("");
    const [emptyInputMessage, setEmptyInputMessage] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="register__page__container">
            <div className="register__page">
                <div className="register__container">
                    <h1>Regístrate</h1>
                    <h2>Ponte cómodo, ¡estás en tu casa!</h2>
                    <Input name="Nombre" icon2="user" size="24" viewBox="0 0 24 24" value={emptyInput} text
        onChange={(e) => setEmptyInput(e.target.value)}/>
                    <Input name="Email" icon2="email" viewBox="0 0 20 16" size="20" email/>
                    <Input name="Contraseña" icon1="lock" icon2="eye" size="24" viewBox="0 0 24 24" password/>
                    {emptyInputMessage && <p className="empty_input_message">¡Usuario y/o contraseña incorrectos!</p>}
                    <Button text="Continuar" onClick={() => {
                            emptyInput === "" ? setEmptyInputMessage(true) : navigate("/register_flow");
                            }}></Button>
                    <p className="center register__page_text">o inicia sesión con</p>
                    <div className="register__social">
                        <Social name="google"/>
                        <Social name="facebook"/>
                        <Social name="apple"/>
                    </div>
                    <p className="center register__page_text register__page_text--small">Al crear una cuenta en Roomeet aceptas la política de privacidad y términos y condiciones</p>
                    
                </div>
            </div>
            

            <div className={`login__page_footer_container footer_display`}>
                <div className="login__page_footer_container_mobile">
                <div>
                    <span></span>
                    <h3>¿Ya tienes una cuenta?</h3>
                    <span></span>
                </div>
                
                <Button
                text="Inicia sesión"
                color="black"
                onClick={onButtonClick}
                
                />
                </div>
            </div>
        </div>
    );
};
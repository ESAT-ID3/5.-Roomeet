import "./LoginPage.css"

import { Button } from "../../components/button/Button";
import { Icons } from "../../components/icons/Icons";
import { Input } from "../../components/input/Input";
import { Social } from "../../components/social/Social";
import { useState } from "react";
import { useNavigate } from "react-router";


export const LoginPage = () => {
    
const [emptyInput, setEmptyInput] = useState("");
const [emptyInputMessage, setEmptyInputMessage] = useState(false);

const navigate = useNavigate();

    return (
        <div className="login__page__container">
            <div className="login__page">
                <div className="login__container">
                    <h1>Bienvenido/a</h1>
                    <h2>¡Estamos encantados de tenerte de vuelta!</h2>
                    <Input name="Nombre" icon2="user" viewBox="0 0 24 24" value={emptyInput} text
                        onChange={(e) => setEmptyInput(e.target.value)}></Input>
                    <Input name="Contraseña" icon2="eye" viewBox="0 0 24 24" password></Input>
                    <span className="login__remember_pass">
                        <p>Recordar contraseña</p>
                        <Icons name="toggle" size="36" color="#A6A6A6" viewBox="0 0 24 24"/>
                    </span>
                    {emptyInputMessage && <p className="empty_input_message">¡Usuario y/o contraseña incorrectos!</p>}
                        <Button text="Continuar" onClick={() => {
                            emptyInput === "" ? setEmptyInputMessage(true) : navigate("/swipe");
                            }}>
                        </Button>
                    <p className="center login__page_text">o inicia sesión con</p>
                    <div className="login__social">
                    <Social name="google"/>
                    <Social name="facebook"/>
                    <Social name="apple"/>
                    </div>
                    <p className="center login__page_text login__page_text--small">¿Has olvidado tu contraseña?</p>
                    
                </div>
            </div>
            {/*
            <div className={`login__page_footer_container`}>
                <div className="login__page_footer_container_mobile">
                <span></span>
                <h3>¿Ya tienes una cuenta?</h3>
                <span></span>
                
                <Button
                text="Inicia sesión"
                color="black"
                
                />
                </div>
            </div>
            */}
        </div>
    );
};
import "./LoginPage.css"

import { Button } from "../../components/button/Button";
import { Icons } from "../../components/icons/Icons";
import { Input } from "../../components/input/Input";
import { Social } from "../../components/social/Social";



export const LoginPage = () => {
    

    return (
        <div className="login__page__container">
            <div className="login__page">
                <div className="login__container">
                    <h1>Bienvenido/a</h1>
                    <h2>¡Estamos encantados de tenerte de vuelta!</h2>
                    <Input name="Nombre" icon1="user"></Input>
                    <Input name="Contraseña" icon1="lock" icon2="eye"></Input>
                    <span className="login__remember_pass">
                        <p>Recordar contraseña</p>
                        <Icons name="toggle" size="36" color="#A6A6A6" viewBox="0 0 24 24"/>
                    </span>
                    <Button text="Continuar"></Button>
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
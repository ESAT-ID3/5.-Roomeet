import "./LoginPage.css"

import { Button } from "../../components/button/Button";
import { Icons } from "../../components/icons/Icons";
import { NavLink } from 'react-router'
import { Input } from "../../components/input/input";
import { Social } from "../../components/social/social";

export const LoginPage = () => {

    return (
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
                <p className="center">o inicia sesión con</p>
                <div className="login__social">
                <Social name="google"/>
                <Social name="facebook"/>
                <Social name="apple"/>
                </div>
                <p className="center">¿Has olvidado tu contraseña?</p>
            </div>
        </div>
    );
};
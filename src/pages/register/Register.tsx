import "./Register.css"

import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Social } from "../../components/social/Social";

interface RegisterProps {
  onSwitch: () => void;  // o el tipo que corresponda
}

export const Register = ({ onSwitch }: RegisterProps) => {

    return (
        <div className="register__page__container">
            <div className="register__page">
                <div className="register__container">
                    <h1>Regístrate</h1>
                    <h2>Ponte cómodo, ¡estás en tu casa!</h2>
                    <Input name="Nombre" icon1="user" size="24" viewBox="0 0 24 24"/>
                    <Input name="Email" icon1="email" viewBox="0 0 20 16" size="24"/>
                    <Input name="Contraseña" icon1="lock" icon2="eye" size="24" viewBox="0 0 24 24"/>
                    <Button text="Continuar"></Button>
                    <p className="center register__page_text">o inicia sesión con</p>
                    <div className="register__social">
                        <Social name="google"/>
                        <Social name="facebook"/>
                        <Social name="apple"/>
                    </div>
                    <p className="center register__page_text register__page_text--small">Al crear una cuenta en Roomeet aceptas la política de privacidad y términos y condiciones</p>
                </div>
            </div>
            
        </div>
    );
};
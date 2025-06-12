import "./StarterPlan.css"
import { Icons } from "../icons/Icons";
import { Button } from "../button/Button";
import { Link } from "react-router";

export const StarterPlan = () => {

    return (
    <div className="card_container">
        <div className="card_plan">
            <h1>Starter</h1>
            <h2>Ideal para comenzar sin compromisos</h2>
            <h3>Free</h3>
            <div className="card_plan__description">
                <div className="card_plan__feature">
                    <Icons name="check" size="24"/>
                    <h4>Creación de perfil personalizada</h4>
                </div>
                <div className="card_plan__feature">
                    <Icons name="check" size="24"/>
                    <h4>Perfiles verificados visibles</h4>
                </div>
                <div className="card_plan__feature">
                    <Icons name="check" size="24"/>
                    <h4>Filtros básicos (edad, género, ciudad)</h4>
                </div>
                <div className="card_plan__feature">
                    <Icons name="check" size="24"/>
                    <h4>Envío de mensajes diarios limitados</h4>
                </div>
                <div className="card_plan__feature">
                    <Icons name="check" size="24"/>
                    <h4>Soporte estándar</h4>
                </div>
                
            </div>
            <Link to="/loginanimation2" className="card_plan__button">
            <Button color="black" text="Empezar con Free"></Button>
            </Link>
        </div>
    </div>
    );
};
import "./PremiumPlan.css"
import { Icons } from "../icons/Icons";
import { Button } from "../yellow-button/Button";

export const PremiumPlan = () => {

    return (
    <div className="card_container">
        <div className="card_plan_premium">
            <h1 className="card_plan_premium__title">Starter</h1>
            <h2 className="card_plan_premium__subtitle">Ideal para comenzar sin compromisos</h2>
            <h3 className="card_plan_premium__title2">Free</h3>
            <div className="card_plan_premium__description">
                <div className="card_plan_premium__feature">
                    <Icons name="check" size="24"/>
                    <h4>Todas las starter features +</h4>
                </div>
                <div className="card_plan_premium__feature">
                    <Icons name="check" size="24"/>
                    <h4>Perfil destacado + más opciones personalizables</h4>
                </div>
                <div className="card_plan_premium__feature">
                    <Icons name="check" size="24"/>
                    <h4>Filtros básicos (edad, género, ciudad)</h4>
                </div>
                <div className="card_plan_premium__feature">
                    <Icons name="check" size="24"/>
                    <h4>Envío de mensajes diarios limitados</h4>
                </div>
                <div className="card_plan_premium__feature">
                    <Icons name="check" size="24"/>
                    <h4>Soporte estándar</h4>
                </div>
                
            </div>
            <Button color="black" text="Elige tu plan"></Button>
        </div>
    </div>
    );
};
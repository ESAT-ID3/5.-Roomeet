import "./PremiumPlan.css"
import { Icons } from "../icons/Icons";
import { Button } from "../button/Button";

export const PremiumPlan = () => {

    return (
    <div className="card_container">
        <div className="card_plan_premium__border">
            <p className="card_plan_premium__title3">LA MEJOR ELECCIÓN</p>
            <div className="card_plan_premium">
                <h1 className="card_plan_premium__title">Premium+</h1>
                <h2 className="card_plan_premium__subtitle">Para los que quieren ir al siguiente nivel</h2>
                <div className="card_plan_premium__title2_flex">
                    <h3 className="card_plan_premium__title2">€15</h3>
                    <h3 className="card_plan_premium__title2 card_plan_premium__title2--small">/por usuario</h3>
                </div>
                <div className="card_plan_premium__description">
                    <div className="card_plan_premium__feature">
                        <Icons name="blue_check" size="24" color="#2C84B2"/>
                        <h4><strong>Todas las starter features +</strong></h4>
                    </div>
                    <div className="card_plan_premium__feature">
                        <Icons name="check" size="24"/>
                        <h4>Perfil destacado + más opciones personalizables</h4>
                    </div>
                    <div className="card_plan_premium__feature">
                        <Icons name="check" size="24"/>
                        <h4>Ver todos los que han visto tu perfil</h4>
                    </div>
                    <div className="card_plan_premium__feature">
                        <Icons name="check" size="24"/>
                        <h4>Mensajes ilimitados</h4>
                    </div>
                    <div className="card_plan_premium__feature">
                        <Icons name="check" size="24"/>
                        <h4>Sin publicidad</h4>
                    </div>
                    <div className="card_plan_premium__feature">
                        <Icons name="check" size="24"/>
                        <h4>Soporte prioritario</h4>
                    </div>    
                </div>
                <Button color="black" text="Elige tu plan"></Button>
            </div>
            
        </div>
    </div>
    );
};
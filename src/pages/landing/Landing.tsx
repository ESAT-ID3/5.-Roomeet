import "./Landing.css"
import { Button } from "../../components/button/Button";
import { NavLanding } from "../../components/navLanding/nav-superior-landing/NavLanding";
import { CarrousselLanding } from '../../components/carrousselLanding/CarrousselLanding'

export const Landing = () => {

    return (
        <div className="landing_container">
            <div className="landing_hero">
                <h1>Encuentra tu compañero de piso ideal en un swipe</h1>
                <h2>Haz match con personas afines a tu estilo de vida y encuentra a tu próximo compañero de piso</h2>
                <div>
                    <Button/>
                </div>
            </div>

            

        </div>
    );
};
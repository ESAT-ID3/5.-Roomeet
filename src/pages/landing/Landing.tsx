import "./Landing.css"
import { Button } from "../../components/button/Button";
import { NavLanding } from "../../components/navLanding/nav-superior-landing/NavLanding";
import { CarrousselLanding } from '../../components/carrousselLanding/CarrousselLanding'

export const Landing = () => {

    return (
        <div className="landing_container">
            <div className="landing_hero">
                
            </div>

            <section className="carroussel">
                <CarrousselLanding/>
            </section>

        </div>
    );
};
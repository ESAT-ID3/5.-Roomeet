import "./Landing.css"
import { Button } from "../../components/button/Button";
import { NavLanding } from "../../components/navLanding/nav-superior-landing/NavLanding";
import { CarrousselLanding } from '../../components/carrousselLanding/CarrousselLanding'
import { IdealPartnerLanding } from "../../components/idealPartnerLanding/IdealPartnerLanding";
import { WhyRoomeet } from "../../components/whyRoomeet/WhyRoomeet";

export const Landing = () => {

    return (
        <>
            <section className="hero-container">
                <div className="hero-overlay">
                    <NavLanding/>

                    <div className="hero-content">
                    <h2 className="hero-title">
                        Encuentra tu compañero <br />
                        de piso ideal en un swipe
                    </h2>
                    <p className="hero-subtitle">
                        Haz match con personas afines a <br />
                        tu estilo de vida y encuentra a tu próximo compañero de piso
                    </p>
                    <div className="button_start">
                        <Button text= 'EMPIEZA YA!' color="yellow"/>
                    </div>
                    <div className="character-illustration" />
                    </div>
                </div>
            </section>

            <section className="carroussel">
                <CarrousselLanding/>
            </section>

            <section>
                <IdealPartnerLanding/>
            </section>

            <section className="whyRoomeet">
                <WhyRoomeet/>
            </section>

        </>
    );
};
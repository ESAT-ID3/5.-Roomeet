import "./Landing.css"
import { Button } from "../../components/button/Button";
import { NavLanding } from "../../components/navLanding/nav-superior-landing/NavLanding";
import { CarrousselLanding } from '../../components/carrousselLanding/CarrousselLanding'
import { IdealPartnerLanding } from "../../components/idealPartnerLanding/IdealPartnerLanding";
import { WhyRoomeet } from "../../components/whyRoomeet/WhyRoomeet";
import { ToogleAnualMensual } from "../../components/toogle-anual-mensual/ToogleAnualMensual";
import { PremiumPlan } from "../../components/plans/PremiumPlan";
import { StarterPlan } from "../../components/plans/StarterPlan";
import { DeskFooter } from "../../components/deskFooter/DeskFooter";
import { LandingReview } from "../../components/landing/landing-review/LandingReview";

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

            <section className="premium-landing">
                <div className="toogle-landing">
                    <ToogleAnualMensual/>
                </div>
                <div className="plans-landing">
                    <div className="starterPlan-landing">
                        <StarterPlan/>
                    </div>
                    <div className="premiumPlan-landing">
                        <PremiumPlan/>
                    </div>
                </div>
            </section>

            <section className="opinions-landing">
                <div className="reviews-landing">
                    <div className="review-landing-1">
                        <LandingReview/>
                    </div>
                    <div className="review-landing-2">
                        <LandingReview/>
                    </div>
                    <div className="review-landing-3">
                        <LandingReview/>
                    </div>
                    </div>
            </section>

            <section className="footer-landing">
                <DeskFooter/>
            </section>

    
        </>
    );
};
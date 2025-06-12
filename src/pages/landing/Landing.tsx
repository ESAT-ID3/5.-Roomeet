import "./Landing.css"
import { useState } from "react";
import { Button } from "../../components/button/Button";
import { NavLanding } from "../../components/navLanding/nav-superior-landing/NavLanding";
import { CarrousselLanding } from "../../components/carrousselLanding/CarrousselLanding";
import { Link } from "react-router";
import { ToogleAnualMensual } from "../../components/toogle-anual-mensual/ToogleAnualMensual";
import { PremiumPlan } from "../../components/plans/PremiumPlan";
import { StarterPlan } from "../../components/plans/StarterPlan";
import { LandingReview } from "../../components/landing/landing-review/LandingReview";
import { DeskFooter } from "../../components/deskFooter/DeskFooter";
import reviewImg1 from "../../assets/images/reviewImg1.png";
import reviewImg2 from "../../assets/images/reviewImg2.png";
import reviewImg3 from "../../assets/images/reviewImg3.png";

type PaymentOption = 'Mensual' | 'Anual';

export const Landing = () => {

    const [selectedOption, setSelectedOption] = useState<PaymentOption>('Mensual');

    return (
        <>
        <div className="landing_container">
            <div className="landing_hero">
                <div>
                    <NavLanding />
                </div>
                <div className="landing_hero__text">
                    <h1>Encuentra tu compañero de piso ideal en un <span>Swipe</span></h1>
                    <h2>Haz match con personas afines a tu estilo de vida y encuentra a tu próximo compañero de piso</h2>
                    <div>
                        <Link to="/loginanimation2" className="landing_hero__button">
                        <Button text="¡Vamos allá!"/>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        <div className="landing_carroussel">
            <CarrousselLanding />
        </div>

        <div className="landing_app_info">
            <div>
                <h3>Descubre a tu próximo/a compañero/a ideal</h3>
            </div>
            <div className="landing_app_info__content">
                <div className="landing_app_info__image1"></div>
                <div className="landing_app_info__image2"></div>
                <div className="landing_app_info__text">
                    <div className="landing_app_info__text_content">
                        <h4 className="underline">Sin complicaciones</h4>
                        <p>¡Crea tu perfil en cuestión de minutos y comienza a explorar miles de perfiles de compañeros de piso que comparten tus intereses y estilo de vida!</p>
                    </div>
                    <div className="landing_app_info__text_content">
                        <h4 className="underline">Haz match con tu futuro hogar</h4>
                        <p>No es solo es una app, es una comunidad. Miles de personas ya están encontrando compañeros afines para compartir no solo gastos, sino también buenos momentos.</p>
                    </div>
                    <div className="landing_app_info__text_content">
                        <h4 className="underline">Porque compartir piso no es ninguna broma</h4>
                        <p>¿Te gusta la tranquilidad o prefieres planes espontáneos? ¿Eres más de madrugar o de trasnochar? Aquí no solo buscas piso, encuentras personas con las que realmente encajas.</p>
                    </div>
                    <div>
                        <Link to="/loginanimation2" className="landing_app_info__content__button">
                        <Button text="¡Comienza ya!"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="landing_app_details">
                <div className="landing_app_details__upper_content">
                    <div className="landing_app_details__text">
                        <h3>¿Por qué elegir Roomeet? 👀</h3>
                        <p>En Roomeet, entendemos que encontrar el compañero de piso perfecto va más allá de un simple alquiler. 
                        <br></br><br></br>Por eso, hemos creado una experiencia única que prioriza la compatibilidad y la confianza. </p>
                    </div>
                    <div className="landing_app_details__image">    
                    </div>
                </div>
                <div className="landing_app_details__grid">
                    <div className="landing_app_details__grid__box_column landing_app_details__grid__box_column--margin-top">
                        <div className="landing_app_details__grid__box">
                            <h4>Compatibilidad garantizada ✨</h4>
                            <p>Nuestro sistema de “match” inteligente te conecta con personas que comparten tus intereses y normas de convivencia</p>
                        </div>
                        <div className="landing_app_details__grid__box">
                            <h4>Fácil e intuitivo 💡</h4>
                            <p>Navega por nuestra plataforma con facilidad, como si estuvieras usando tu app de citas favorita. ¡Encontrar tu hogar ideal nunca fue tan divertido!</p>
                        </div>
                    </div>
                    <div className="landing_app_details__grid__box_column">
                        <div className="landing_app_details__grid__box">
                            <h4>Perfiles Detallados y Verificados ✅</h4>
                            <p>Conoce a tus futuros compañeros a fondo antes de decidir. La verificación de identidad y las reseñas te dan la tranquilidad que necesitas</p>
                        </div>
                        <div className="landing_app_details__grid__box">
                            <h4>Comunidad Segura 🫂</h4>
                            <p>Únete a una comunidad de personas que buscan lo mismo que tú. Nuestro equipo de moderación garantiza un ambiente respetuoso y seguro</p>
                        </div>
                    </div>
                </div>
            </div>


        <div className="landing_app_premium">
            <h3>Niveles de suscripción</h3>
            <div><ToogleAnualMensual selected={selectedOption} setSelected={setSelectedOption}/></div>
            <div className="landing_app_premium__plans">
                <div><StarterPlan/></div>   
                {selectedOption === 'Mensual' && <div><PremiumPlan/></div>}
                {selectedOption === 'Anual' && <div><PremiumPlan price={90}/></div>}
                
            </div>
        </div>

        <div className="landing_app_img_separator_container">
            <div className="landing_app_img_separator"></div>
        </div>

        <div className="landing_app_reviews_container">
            <div className="landing_app_reviews">
            <LandingReview text="Nunca imaginé que encontrar un compañero de piso fuera tan fácil. Gracias a Roomeet pude acceder a perfiles verificados y conocer a personas afines antes de tomar una decisión. ¡Definitivamente lo recomendaré!" name="Lucía" age={23} job="Freelance" img={reviewImg1}/>
            <LandingReview text="¡Roomeet me ayudó a encontrar el compañero de piso perfecto! La plataforma es súper fácil de usar y me permitió filtrar a personas con intereses similares. ¡Ahora comparto un piso con alguien que realmente entiendo y me llevo genial!" name="Ana María" age={26} job="Estudiante" img={reviewImg2}/>
            <LandingReview text="Llevaba tiempo buscando compañeros con los que pudiera compartir más que solo los gastos. La opción de Roomeet me ayudó a encontrar a alguien con quien realmente conecté, tanto a nivel de horarios como de estilo de vida." name="Carlos" age={32} job="Profesor" img={reviewImg3}/>
            </div>
            <Link to="/loginanimation2" className="landing_app_reviews__button">
            <Button text="¡EMPIEZA YA!"/>
            </Link>
        </div>

        <DeskFooter/>
        </>
    );
};
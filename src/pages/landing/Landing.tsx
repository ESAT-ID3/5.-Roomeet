import "./Landing.css"
import { Button } from "../../components/button/Button";
import { NavLanding } from "../../components/navLanding/nav-superior-landing/NavLanding";
import { CarrousselLanding } from "../../components/carrousselLanding/CarrousselLanding";
import { Link } from "react-router";

export const Landing = () => {

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
                        <Link to="/loginanimation2">
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
                        <Link to="/loginanimation2">
                        <Button text="¡Comienza ya!"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="landing_app_details">
                <div className="landing_app_details__upper_content">
                    <div className="landing_app_details__text"></div>
                    <div className="landing_app_details__image"></div>
                </div>
                <div className="landing_app_details__grid">
                    <div></div>
                    <div></div>
                </div>
            </div>

        </>
    );
};
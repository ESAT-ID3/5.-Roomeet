import "./LandingReview.css"
import { Icons } from "../../icons/Icons";

export const LandingReview = () => {

    return (
        <div className="review_container_profile">
            <div className="review__profile"> {/*Añadir imagen de fondo */}
            </div>
            <div className="review_container"> 
                <div className="review__stars"> {/*Estrellas */}
                    <Icons name="star" size="24" color="#B03030"/>
                    <Icons name="star" size="24" color="#B03030"/>
                    <Icons name="star" size="24" color="#B03030"/>
                    <Icons name="star" size="24" color="#B03030"/>
                    <Icons name="star" size="24" color="#B03030"/>
                </div> 
                <div className="review__text"> {/*Texto */}
                    <p>“Lorem ipsum dolor sit amet consectetur. Augue vel ultrices magnis dui. Orci tristique ut viverra non pretium etiam nulla consequat.Lorem ipsum dolor sit amet consectetur. Augue vel ultrices magnis dui. Orci tristique ut viverra non pretium etiam nulla consequat”</p>
                </div> 
                <div className="review__user"> {/*Info de la persona */}
                    <p className="review__user_title">Nombre, edad</p>
                    <p className="review__user_subtitle">Profesión</p>
                </div> 
            </div>
        </div>
    );
};
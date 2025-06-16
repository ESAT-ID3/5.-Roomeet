import "./LandingReview.css"
import { Icons } from "../../icons/Icons";

interface LandingReviewProps {
    text: string; 
    name: string;
    age: number;
    job: string;
    img: string; 
}

export const LandingReview = ({text, name, age, job, img}:LandingReviewProps) => {

    return (
        <div className="review_container_profile">
            <div
            className="review__profile"
            style={{
                backgroundImage: `url('${img}')`, // URL de la imagen del perfil
            }}
            ></div>
            <div className="review_container"> 
                <div className="review__stars"> {/*Estrellas */}
                    <Icons name="star" size="24" color="#B03030" viewBox="0 0 22 22"/>
                    <Icons name="star" size="24" color="#B03030" viewBox="0 0 22 22"/>
                    <Icons name="star" size="24" color="#B03030" viewBox="0 0 22 22"/>
                    <Icons name="star" size="24" color="#B03030" viewBox="0 0 22 22"/>
                    <Icons name="star" size="24" color="#B03030" viewBox="0 0 22 22"/>
                </div> 
                <div className="review__text"> {/*Texto */}
                    <p>{text}</p>
                </div> 
                <div className="review__user"> {/*Info de la persona */}
                    <p className="review__user_title">{name}, {age} años</p>
                    <p className="review__user_subtitle">{job}</p>
                </div> 
            </div>
        </div>
    );
};
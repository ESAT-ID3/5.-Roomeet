import "./AnotherProfile.css"
import { UserCard } from "../../components/user-card/UserCard";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { Button } from "../../components/button/Button";
import { Ads } from "../../components/ads/Ads";
import { PersonalDataTag } from "../../components/edit-profile/personal-data-tag/PersonalDataTag";
import { TutorialButton } from "../../components/tutorial-buttons/TutorialButton";
import { RoomCard } from "../../components/room-card/RoomCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const AnotherProfile = () => {

const navigate = useNavigate();

    return (
<div className="profile_preview__footer">
    <div className="profile_preview__container">
        <DeskNav/>
        <div className="profile_preview__card_container">
            <SwipeNavHeader icon1="shield" icon2="gear"/>
            
            
                
                <div className="profile_preview__card">
                <UserCard onCardClick={() => navigate("/swipe")} name="Ana" age={25} img="https://images.unsplash.com/photo-1508002366005-75a695ee2d17?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBibGFjayUyMHdvbWFufGVufDB8fDB8fHww" tags={["Madrugadora", "Ejercicio", "Muy ordenada"]}/>
                </div>
                <p className="profile_preview__user_info_text center_text">Aquí tienes algunos accesos directos para navegar con el teclado</p>
                <div className="profile_preview__card__tutorial_button">
                <TutorialButton text="Siguiente foto"/>
                <TutorialButton icon="arrow_left" text="Dislike"/>
                </div>
                <div className="profile_preview__card__tutorial_button">
                <TutorialButton icon="arrow_down" text="Ver Perfil"/>
                <TutorialButton icon="arrow_right" text="Like"/>
                </div>
             
        </div>
        <div className="profile_preview__user_info_container">
            <p className="profile_preview__user_info_title">Detalles Personales</p>
            <div className="profile_preview__personal_data">
                <div className="profile_preview__personal_data__column">
                    <PersonalDataTag text="Mujer (ella)" icon="gender" /> {/*Poner texto e icono según lo que haya indicado el usuario*/}
                    <PersonalDataTag text="Abogada" icon="briefcase" viewBox="0 0 16 16"/>
                </div>
                <div className="profile_preview__personal_data__column">
                    <PersonalDataTag text="Mislata, Valencia" icon="location" viewBox="0 0 18 18"/>
                    <PersonalDataTag text="180€/mes" icon="budget" viewBox="0 0 24 24"/>
                </div>
                
            </div> {/*Detalles Personales */}
            
                <div>
                    <Link to="/room_profile">
                    <RoomCard/>
                    </Link>
                    
                    </div>
            
             {/*Límites y preferencias */}
                    
            <p className="profile_preview__user_info_title">❤️ Sobre mí</p>
            <p className="profile_preview__user_info_text">Hola! 😊 Me llamo Ana, tengo 25 años y estoy buscando piso 🏠. Soy una persona muy organizada —me encanta tener cada cosa en su sitio, tanto en casa como en mi vida en general ✨. Disfruto de los espacios limpios, tranquilos y con buen rollo 🧘‍♀️. </p>
                
                {/*Sobre mí */}
            <p className="profile_preview__user_info_title">🕑 Duración del alquiler</p>
             <p className="profile_preview__user_info_text">Entre 3 y 6 meses</p>
            
            <p className="profile_preview__user_info_title">💸 Forma de gestionar los gastos</p>
             <p className="profile_preview__user_info_text">Cada uno gestiona y paga sus gastos</p>
            
                 {/*¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas? */}
            <p className="profile_preview__user_info_title">👀 ¿Qué buscas en una persona con la que compartir piso?</p>
             <p className="profile_preview__user_info_text">Que no sea un maldito guarro</p>
               {/*¿Qué buscas en una persona con la que compartir piso? */}
            <p className="profile_preview__user_info_title">❌ ¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran?</p>
             <p className="profile_preview__user_info_text">A partir de las 00:00 me gustaría que no se hiciera ningún ruido</p>
            

            <div className="profile_preview__buttons">
            <Button text="Bloquear perfil" color="red" icon="yes"/>
            <Button text="Denunciar perfil" color="red" icon="report"/>
            </div>
            
            
    </div>
        
        <div className="ad">
            <Ads/>
        </div>
        <AppNav/>
    </div>
    
</div>
    );
};
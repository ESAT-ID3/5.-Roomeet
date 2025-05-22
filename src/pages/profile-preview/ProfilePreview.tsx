import "./ProfilePreview.css"
import { UserCard } from "../../components/user-card/UserCard";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { Button } from "../../components/button/Button";
import { Ads } from "../../components/ads/Ads";
import { PersonalDataTag } from "../../components/edit-profile/personal-data-tag/PersonalDataTag";
import { UserTag } from "../../components/edit-profile/user-tags/UserTag";

export const ProfilePreview = () => {

    return (
     <div className="profile_preview__container">
        <DeskNav/>
        <div className="profile_preview__card_container">
        <SwipeNavHeader/>
        <UserCard name="María" age="23"/> 
        </div>
        <div className="profile_preview__user_info_container">
            <p>Detalles Personales</p>
            <div className="profile_preview__personal_data">
                <div className="profile_preview__personal_data__column">
                    <PersonalDataTag/>
                    <PersonalDataTag/>
                </div>
                <div className="profile_preview__personal_data__column">
                    <PersonalDataTag/>
                    <PersonalDataTag/>
                </div>
                
            </div> {/*Detalles Personales */}
            <p>🏳️‍🌈 Identidad y Valores</p>
            <div className="profile_preview__identity">
                <UserTag text="LGTB+"/>
            </div> {/*Identidad y Valores */}
            <div></div> {/*Estilo de Vida */}
            <div></div> {/*Convivencia y Hábitos */}
            <div></div> {/*Mascotas */}
            <div></div> {/*Límites y preferencias */}
            <div></div> {/*Sobre mí */}
            <div></div> {/*Duración de la estancia */}
            <div></div> {/*¿Cómo prefieres gestionar los gastos? */}
            <div></div> {/*¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas? */}
            <div></div> {/*¿Qué buscas en una persona con la que compartir piso? */}
            <div></div> {/*¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran? */}
            <Button text="Guardar cambios" />
        </div>
        
        <div className="ad">
            <Ads/>
        </div>
        <AppNav/>
    </div>
    );
};
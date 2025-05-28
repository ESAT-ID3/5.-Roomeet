import "./ProfilePreview.css"
import { UserCard } from "../../components/user-card/UserCard";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { Button } from "../../components/button/Button";
import { Ads } from "../../components/ads/Ads";
import { PersonalDataTag } from "../../components/edit-profile/personal-data-tag/PersonalDataTag";
import { UserTag } from "../../components/edit-profile/user-tags/UserTag";
import { Select } from "../../components/select/Select";
import { DeskFooter } from "../../components/deskFooter/DeskFooter";
import { EditPreview } from "../../components/edit-preview/EditPreview";
import { ImageGridUploader } from "../../components/profile-grid/ImageGridUploader";


export const ProfilePreview = () => {

    return (
<div className="profile_preview__footer">
    <div className="profile_preview__container">
        <DeskNav/>
        <div className="profile_preview__card_container">
        <SwipeNavHeader icon1="shield" icon2="gear"/>
        <EditPreview/>
        <ImageGridUploader/>
        <UserCard name="María" age="23"/> 
        </div>
        <div className="profile_preview__user_info_container">
            <p className="profile_preview__user_info_title">Detalles Personales</p>
            <div className="profile_preview__personal_data">
                <div className="profile_preview__personal_data__column">
                    <PersonalDataTag text="Mujer (ella)" icon="gender"/> {/*Poner texto e icono según lo que haya indicado el usuario*/}
                    <PersonalDataTag text="Abogada" icon="gender"/>
                </div>
                <div className="profile_preview__personal_data__column">
                    <PersonalDataTag text="Mislata, Valencia" icon="gender"/>
                    <PersonalDataTag text="180€/mes" icon="gender"/>
                </div>
                
            </div> {/*Detalles Personales */}
            <p className="profile_preview__user_info_title">🏳️‍🌈 Identidad y Valores</p>
            <div className="profile_preview__identity">
                <UserTag text="LGTB+"/>
                <UserTag text="Vegetariano/a"/>
                <UserTag text="Fumador/a"/>
                <UserTag text="Ordenado/a"/>
                <UserTag text="Tiene mascota"/> 
                <UserTag text="Prefiere su espacio"/>
            </div> {/*Identidad y Valores */}
            <p className="profile_preview__user_info_title">🥦 Estilo de vida</p>
            <div className="profile_preview__identity">
                <UserTag text="Vegetariano/a"/>
                <UserTag text="Vegano/a"/>
                <UserTag text="Omnívoro/a"/>
                <UserTag text="Celíaco/a"/>
                <UserTag text="Cocino mucho"/> 
                <UserTag text="Apenas cocino"/>
                <UserTag text="Healthy Lifestyle"/>
                <UserTag text="Dan cel café"/>
                </div> {/*Estilo de Vida */}
            <p className="profile_preview__user_info_title">🧘‍♀️ Convivencia y hábitos</p>
            <div className="profile_preview__identity">
                <UserTag text="Ordenado/a"/>
                <UserTag text="Limpieza flexible"/>
                <UserTag text="Le gusta compartir cosas"/>
                <UserTag text="Prefiere su espacio"/>
                <UserTag text="Silencioso/a"/> 
                <UserTag text="Social"/>
                <UserTag text="Noctámbulo/a"/>
                <UserTag text="Madrugador/a"/>
                <UserTag text="Trabajo desde casa"/>
                <UserTag text="Trabajo fuera"/>
                </div> {/*Convivencia y Hábitos */}
                <p className="profile_preview__user_info_title">🐶 Mascotas</p>
            <div className="profile_preview__identity">
                <UserTag text="Tiene mascotas"/>
                <UserTag text="Le encantan los animales"/>
                <UserTag text="Alergia a los animales"/>
            </div> {/*Mascotas */}
            <p className="profile_preview__user_info_title">🚭 Límites y preferencias</p>
            <div className="profile_preview__identity">
                <UserTag text="Fumador/a"/>
                <UserTag text="No fuma"/>
                <UserTag text="No quiere gente fumando"/>
                <UserTag text="Bebe alcohol"/>
                <UserTag text="No bebe alcohol"/>
            </div> {/*Límites y preferencias */}
            <p className="profile_preview__user_info_title">Sobre mí</p>
            <div className="profile_preview__identity">
                <textarea placeholder="Ej: Tranquila y sociable. Me gusta cocinar, ver pelis y tener buen ambiente en casa."></textarea>
                <p className="textarea__counter">0/500</p>
            </div> {/*Sobre mí */}
            <p className="profile_preview__user_info_title">Duración del alquiler</p>
            <div className="profile_preview__identity">
                <Select options={["Menos de 3 meses","Entre 3 y 6 meses","Entre 6 y 12 meses", "Más de 1 año", "Aún no lo sé"]}/>
            </div> {/*Duración de la estancia */}
            <p className="profile_preview__user_info_title">Forma de gestionar los gastos</p>
            <div className="profile_preview__identity">
                <Select options={["Cada uno controla y paga sus gastos", "Los gastos totales de la casa se dividen por igual", "Me adapto a otras formas"]}/>
            </div> {/*¿Cómo prefieres gestionar los gastos? */}
            <p className="profile_preview__user_info_title">¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas?</p>
            <div className="profile_preview__identity">
                <textarea placeholder="Ej: Me gusta escuchar música por las mañanas, necesito silencio para dormir, hago yoga en el salón cada tarde."></textarea>
                <p className="textarea__counter">0/500</p>
            </div> {/*¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas? */}
            <p className="profile_preview__user_info_title">¿Qué buscas en una persona con la que compartir piso?</p>
            <div className="profile_preview__identity">
                <textarea placeholder="Ej: Alguien respetuoso con los espacios comunes, que le guste charlar de vez en cuando y que se implique en mantener el piso bien."
                ></textarea>
                <p className="textarea__counter">0/500</p>
            </div> {/*¿Qué buscas en una persona con la que compartir piso? */}
            <p className="profile_preview__user_info_title">¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran?</p>
            <div className="profile_preview__identity">
                <textarea placeholder="Ej: Me levanto muy temprano por trabajo, así que suelo irme a dormir pronto. Me gusta tener la cocina recogida por la noche."></textarea>
                <p className="textarea__counter">0/500</p>
            </div> {/*¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran? */}
            
            <Button text="Guardar cambios" />
    </div>
        
        <div className="ad">
            <Ads/>
        </div>
        <AppNav/>
    </div>
    <DeskFooter/>
</div>
    );
};
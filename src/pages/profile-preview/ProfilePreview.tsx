import "./ProfilePreview.css"
import { useState } from "react";
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
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';

export const ProfilePreview = () => {
const notify = () => toast("Wow so easy!");

    const [mostrarB, setMostrarB] = useState(true);
    const [mostrarC, setMostrarC] = useState(false);

    const [formData, setFormData] = useState({
  descripcion: '',
  duracionAlquiler: '',
  gestionGastos: '',
  costumbresHabitos: '',
  buscaPersona: '',
  rutinaNecesidad: '',
});

const handleSubmit = () => {
  console.log(formData);
  // Envía a backend o procesa como necesites
};


    return (
<div className="profile_preview__footer">
    <div className="profile_preview__container">
        <DeskNav/>
        <div className="profile_preview__card_container">
        <SwipeNavHeader icon1="shield" icon2="gear"/>
        <EditPreview onMostrarB={() => 
            {setMostrarB(true);
            setMostrarC(false);
        }} 
        onMostrarC={() => {
            setMostrarC(true);
            setMostrarB(false);
        }}
            />
        {mostrarB && <ImageGridUploader/>}
        {mostrarC && <UserCard name="María" age="23"/>}
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
            {mostrarC && (
                <div>
                    <p className="profile_preview__user_info_title">Etiquetas</p>
                    <div 
                    className="profile_preview__identity"
                    style={{ maxWidth: '30rem' }}>
                    <UserTag text="LGTB+"/>
                    <UserTag text="Vegetariano/a"/>
                    <UserTag text="Fumador/a"/>
                    <UserTag text="Ordenado/a"/>
                    <UserTag text="Tiene mascota"/> 
                    <UserTag text="Prefiere su espacio"/>
                    </div>
                </div>
            )}
            {mostrarB && (
                <>
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
            </div>
             </>
            )} {/*Límites y preferencias */}
            <p className="profile_preview__user_info_title">❤️ Sobre mí</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Ej: Tranquila y sociable. Me gusta cocinar, ver pelis y tener buen ambiente en casa."
                        value={formData.descripcion}
                        onChange={e => setFormData({...formData, descripcion: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </> )}
            {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className="profile_preview__user_info_text">{formData.descripcion}</p>
                    </div>
                </> )}    
                
                {/*Sobre mí */}
            <p className="profile_preview__user_info_title">🕑 Duración del alquiler</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <Select options={["Menos de 3 meses","Entre 3 y 6 meses","Entre 6 y 12 meses", "Más de 1 año", "Aún no lo sé"]}
                        value={formData.duracionAlquiler}
                        onChange={value => setFormData({...formData, duracionAlquiler: value})}/>
                    </div>
                </> )} 
            {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className="profile_preview__user_info_text"> Entre 6 y 12 meses</p>
                    </div>
                </> )}      
                {/*Duración de la estancia */}
            <p className="profile_preview__user_info_title">💸 Forma de gestionar los gastos</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <Select options={["Cada uno controla y paga sus gastos", "Los gastos totales de la casa se dividen por igual", "Me adapto a otras formas"]}
                        value={formData.gestionGastos}
                        onChange={value => setFormData({...formData, gestionGastos: value})}/>
                    </div>
                </> )}
                
                {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className="profile_preview__user_info_text"> Cada uno controla y paga sus gastos</p>
                    </div>
                </> )}  {/*¿Cómo prefieres gestionar los gastos? */}
            <p className="profile_preview__user_info_title">🙊 ¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas?</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Ej: Me gusta escuchar música por las mañanas, necesito silencio para dormir, hago yoga en el salón cada tarde."
                        value={formData.costumbresHabitos}
                        onChange={e => setFormData({...formData, costumbresHabitos: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div> 
                </> )}
                
                {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className="profile_preview__user_info_text"> Suelo madrugar y me gusta que por las noches haya tranquilidad. Cocino bastante, pero siempre dejo todo recogido. Los fines de semana suelo limpiar y me gusta tener la casa ordenada. </p>
                    </div>
                </> )}  {/*¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas? */}
            <p className="profile_preview__user_info_title">👀 ¿Qué buscas en una persona con la que compartir piso?</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Ej: Alguien respetuoso con los espacios comunes, que le guste charlar de vez en cuando y que se implique en mantener el piso bien."
                        value={formData.buscaPersona}
                        onChange={e => setFormData({...formData, buscaPersona: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </> )}
                
            {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className="profile_preview__user_info_text"> Alguien respetuoso, tranquilo y con quien haya buen ambiente. No busco una amistad intensa, pero sí alguien con quien compartir alguna charla o cena. Que cuide el espacio común y respete los horarios.</p>
                    </div>
                </> )}   {/*¿Qué buscas en una persona con la que compartir piso? */}
            <p className="profile_preview__user_info_title">❌ ¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran?</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Ej: Me levanto muy temprano por trabajo, así que suelo irme a dormir pronto. Me gusta tener la cocina recogida por la noche."
                        value={formData.rutinaNecesidad}
                        onChange={e => setFormData({...formData, rutinaNecesidad: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </> )} 
                
                {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className="profile_preview__user_info_text"> Trabajo desde casa algunos días, así que valoro un ambiente tranquilo. También hago yoga por las mañanas en el salón, pero puedo adaptarme.</p>
                    </div>
                </> )}  {/*¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran? */}
            {mostrarB && <Button onClick={() => {
                handleSubmit();
                notify();
             }} text="Guardar cambios" />}
            {mostrarC && <Button text="Bloquear perfil" color="disabled" icon="yes"/>}
            {mostrarC && <Button text="Denunciar perfil" color="disabled" icon="report"/>}
            
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
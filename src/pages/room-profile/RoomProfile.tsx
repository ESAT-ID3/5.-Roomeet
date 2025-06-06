import "./RoomProfile.css"
import { useState, useEffect } from "react";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { Button } from "../../components/button/Button";
import { Ads } from "../../components/ads/Ads";
import { PersonalDataTag } from "../../components/edit-profile/personal-data-tag/PersonalDataTag";
import { Select } from "../../components/select/Select";
import { DeskFooter } from "../../components/deskFooter/DeskFooter";
import { EditPreview } from "../../components/edit-preview/EditPreview";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";
import { FlatGrid } from "../../components/flat-grid/FlatGrid";
import { Counter } from "../../components/counter/Counter";
import { Checkboxes } from "../../components/itemToCheck/checkboxes/Checkboxes";
import { ImageGridUploader } from "../../components/profile-grid/ImageGridUploader";
import { RoomTags } from "../../components/edit-profile/room-tags/RoomTags";


export const RoomProfile = () => {

    const saveChanges = () => {
    toast.success('¡Cambios guardados con éxito!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce, // Usar la transición Bounce
    });
}

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

const [counters, setCounters] = useState<number[]>([0, 0]); // Estado para manejar los valores de todos los contadores

  const updateCounter = (index: number, value: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index] = value; // Actualiza solo el contador que se está modificando
    setCounters(updatedCounters); // Establece el estado actualizado
  };

  const [checkboxStates, setCheckboxStates] = useState({
    tieneSalon: null,      // Estado para "¿Tiene salón?"
    sePermiteFumar: null, // Estado para "¿Se permite fumar?"
    estaAmueblado: null,   // Estado para "¿Está amueblado?"
  });

  // Función para actualizar el estado del checkbox correspondiente
  const handleCheckboxChange = (section: string, value: string | null) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

const handleSubmit = () => {
  console.log(formData);
  // Envía a backend o procesa como necesites
};


    return (
<div className="room_profile_preview__footer">
    <div className="room_profile_preview__container">
        <DeskNav/>
        <div className="room_profile_preview__card_container">
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
            {mostrarB && <ImageGridUploader room="Yes"/>}
            {mostrarC && (
                <>
                <FlatGrid/>
                </>
                )}
        </div>
        <div className="room_profile_preview__user_info_container">
            <p className="room_profile_preview__user_info_title">Detalles Personales</p>
            <div className="room_profile_preview__personal_data">
                    <PersonalDataTag text="Mislata, Valencia" icon="gender"/>
                    <PersonalDataTag text="180€/mes" icon="gender"/>
            </div> {/*Detalles Personales */}
            
            <p className="room_profile_preview__user_info_title">🏡 Descripción </p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <textarea placeholder="¿Cómo es el piso en el que vives? Menciona el ambiente, la gente y lo que destacarías"
                        value={formData.descripcion}
                        onChange={e => setFormData({...formData, descripcion: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </> )}
            {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className={formData.descripcion === "" ? "profile_preview__user_info_text profile_preview__user_info_empty" : "profile_preview__user_info_text"}>{formData.descripcion === "" ? "¡No has escrito ninguna descripción! ¿A qué esperas?" : formData.descripcion}</p>
                    </div>
                </> )}    
                
                {/*Sobre mí */}
            <p className="room_profile_preview__user_info_title">🕑 Duración del alquiler</p>
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
                        <p className="profile_preview__user_info_text"> {formData.duracionAlquiler}</p>
                    </div>
                </> )}      
                {/*Duración de la estancia */}
                
            <p className="room_profile_preview__user_info_title">📍 Ubicación / Zona</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <textarea placeholder="¿Dónde se encuentra tu piso y qué servicios tiene cerca? (ej. Barrio, ciudad, área, paradas de transporte público)"
                        value={formData.costumbresHabitos}
                        onChange={e => setFormData({...formData, costumbresHabitos: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div> 
                </> )}
                
                {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className={formData.costumbresHabitos === "" ? "profile_preview__user_info_text profile_preview__user_info_empty" : "profile_preview__user_info_text"}> {formData.costumbresHabitos === "" ? "Dejar claras tus costumbres podría evitar futuras discusiones, ¡escribe algo!" : formData.costumbresHabitos} </p>
                    </div>
                </> )}  {/*¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas? */}
            <p className="room_profile_preview__user_info_title">✏️ Reglas del hogar</p>
            {mostrarB && (
                <>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Normas del hogar: ¿hay alguna regla o costumbre que tus futuros compañeros deberían conocer?"
                        value={formData.buscaPersona}
                        onChange={e => setFormData({...formData, buscaPersona: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </> )}
                
            {mostrarC && (
                <>
                    <div className="profile_preview__identity">
                        <p className={formData.buscaPersona === "" ? "profile_preview__user_info_text profile_preview__user_info_empty" : "profile_preview__user_info_text"}> {formData.buscaPersona === "" ? "Haz saber a los demás si serían tu compañero/a ideal, ¡qué todos te lean!" : formData.buscaPersona} </p>
                    </div>
                </> )}   {/*¿Qué buscas en una persona con la que compartir piso? */}
                <p className="room_profile_preview__user_info_title">🔑 Detalles del piso</p>
            {mostrarB && (
                <>  
                    <div className="room_profile_preview__room_details room_profile_preview__user_info_title">
                        <div className="room_profile_preview__room_details__flex">
                            <p>Número de habitaciones</p>
                            {counters.map((count, index) => {
                            if (index === 1) return null;  // Si el índice es 1, no renderizamos el componente
                            return (
                                <Counter 
                                key={index} 
                                count={count} 
                                onCountChange={(newCount: number) => updateCounter(index, newCount)} 
                                />
                            );
                            })}
                        </div>
                        <div className="room_profile_preview__room_details__flex">
                            <p>Numero de baños</p>
                            {counters.map((count, index) => {
                            if (index === 0) return null;  // Si el índice es 0, no renderizamos el componente
                            return (
                                <Counter 
                                key={index} 
                                count={count} 
                                onCountChange={(newCount: number) => updateCounter(index, newCount)} 
                                />
                            );
                            })}
                            
                        </div>
                        <div className="room_profile_preview__room_details__flex">
                            <p>¿Tiene salón?</p>
                            <Checkboxes
                            selected={checkboxStates.tieneSalon}
                            onChange={(value) => handleCheckboxChange('tieneSalon', value)}
                            option1="Sí"
                            option2="No"
                            />
                        </div>
                        <div className="room_profile_preview__room_details__flex">
                            <p>¿Se permite fumar?</p>
                            <Checkboxes
                            selected={checkboxStates.sePermiteFumar}
                            onChange={(value) => handleCheckboxChange('sePermiteFumar', value)}
                            option1="Sí"
                            option2="No"
                            />
                        </div>
                        <div className="room_profile_preview__room_details__flex">
                            <p>¿Está amueblado?</p>
                            <Checkboxes
                            selected={checkboxStates.estaAmueblado}
                            onChange={(value) => handleCheckboxChange('estaAmueblado', value)}
                            option1="Sí"
                            option2="No"
                            />
                        </div>
                    </div>
                </>)} 

                {mostrarC && (
                <>  
                    {counters[0] > 0 && <RoomTags count={counters[0]} text="Habitaciones"/>}
                    {counters[1] > 0 && <RoomTags count={counters[1]} text="Baños"/>}
                    {checkboxStates.tieneSalon}
                </>)}   
            
            {mostrarB && (
            <>
                <Button onClick={() => {
                handleSubmit();
                saveChanges();
                }} text="Guardar cambios" />

                <Button color="red" onClick={() => {
                handleSubmit();
                notify();
                }} text="Cancelar" />
            </>
            )}

            <ToastContainer />
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
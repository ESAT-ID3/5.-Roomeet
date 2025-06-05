import "./RegisterFlow.css"
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
import { Checkboxes } from "../../components/itemToCheck/checkboxes/Checkboxes";
import { RegisterFlowQuestion } from "../../components/register-flow-question/RegisterFlowQuestion";
import { ImageGridUploader } from "../../components/profile-grid/ImageGridUploader";
import { UserTag } from "../../components/edit-profile/user-tags/UserTag";

const identity = [
    "LGTB+",
    "Fumador/a",
    "Ordenado/a",
  // ... más opciones
];

const lifestyle = [
    "Vegetariano/a",
    "Vegano/a",
    "Omnívoro/a",
    "Celíaco/a",
    "Cocino mucho", 
    "Apenas cocino",
    "Healthy Lifestyle",
    "Fan del café",
  // ... más opciones
];

const habits = [
    "Limpieza flexible",
    "Le gusta compartir cosas",
    "Prefiere su espacio",
    "Silencioso/a",
    "Social",
    "Noctámbulo/a",
    "Madrugador/a",
    "Trabajo desde casa",
    "Trabajo fuera",
]

const pets = [
    "Tiene mascotas",
    "Le encantan los animales",
    "Alergia a los animales",
]

const limits = [
    "Fumador/a",
    "No fuma",
    "No quiere gente fumando",
    "Bebe alcohol",
    "No bebe alcohol",
]


export const RegisterFlow = () => {

    const maxOptionError = () => {
    toast.error('¡Solo puedes seleccionar hasta 6 etiquetas!', {
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
<ToastContainer/>

    const [seleccionados, setSeleccionados] = useState<string[]>([]);

useEffect(() => {
    console.log("Seleccionados actualizados:", seleccionados); //Esto se ejecutará después de que haya un cambio en el array de "seleccionados"
  }, [seleccionados]);

function toggleOpcion(opcion: string) {
  if (seleccionados.includes(opcion)) {
    setSeleccionados(seleccionados.filter(item => item !== opcion));
  } else {
    if (seleccionados.length < 6) {
      setSeleccionados([...seleccionados, opcion]);
    } else {
        maxOptionError();
    }
  }
}

    const [position, setPosition] = useState(0);
    const [step, setStep] = useState(0);

     const handleMove = () => {
    const windowWidth = window.innerWidth; // Obtiene el ancho de la ventana (100vw)
    setPosition(position - windowWidth); // Desplaza el div por el ancho de la ventana
  };


const [checkboxStates, setCheckboxStates] = useState({
    tienePiso: null,      // Estado para "¿Tiene salón?"
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



    return (
<div>
    <div className="register_flow_container">
        <div className="register_flow_steps__container">
            <div className={step >= 0 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 1 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 2 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 3 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 4 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 5 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 6 ? "register_flow_step completed" : "register_flow_step"}></div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="¿Tienes piso actualmente?" subtitle="Si ya tienes piso, podrás crear su perfil para buscar compañeros. Si no, te mostraremos personas con habitaciones libres."/>
                <Checkboxes
                selected={checkboxStates.tienePiso}
                onChange={(value) => handleCheckboxChange('tienePiso', value)}
                option1="Sí, estoy buscando compañeros de piso"
                option2="No, estoy buscando piso y compañeros"
                register
                />
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="¿Cuál es tu fecha de nacimiento?" subtitle="Solo mostraremos tu edad, no la fecha exacta."/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
                    />
                </div>
        </div>
        
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*2}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="¿Con qué género te identificas?" subtitle="Puedes dejarlo en blanco si lo prefieres."/>
                <Checkboxes
                selected={checkboxStates.tienePiso}
                onChange={(value) => handleCheckboxChange('tienePiso', value)}
                option1="Sí, estoy buscando compañeros de piso"
                option2="No, estoy buscando piso y compañeros"
                register
                />
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*3}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="¿A qué te dedicas?" subtitle="Ayuda a otros a conocerte un poco más."/>
                <Checkboxes
                selected={checkboxStates.tienePiso}
                onChange={(value) => handleCheckboxChange('tienePiso', value)}
                option1="Sí, estoy buscando compañeros de piso"
                option2="No, estoy buscando piso y compañeros"
                register
                />
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*4}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="¿En qué ciudad estás buscando o vives actualmente?" subtitle="Esto nos ayuda a mostrarte personas cerca de ti."/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*5}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="Cuéntanos sobre ti" subtitle="¿Cómo eres? ¿Qué te gusta? ¿Qué tipo de convivencia buscas?"/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*6}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="Muestra tu día a día" subtitle="Sube fotos que hablen de ti: tu energía, tu estilo de vida, tu esencia. ¡Haz que otros te conozcan un poco más!"/>
                </div>
                <ImageGridUploader/>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*7}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="¿Qué te representa?" subtitle="Elige etiquetas que te describan o sean importantes para ti (máximo 6)."/>
                                <>
                                    <p className="profile_preview__user_info_title">🏳️‍🌈 Identidad y Valores</p>
                                    <div className="profile_preview__identity">
                                    {identity.map((opcion) => (
                                    <UserTag
                                    key={opcion}
                                    text={opcion}
                                    isSelected={seleccionados.includes(opcion)}
                                    onClick={() => {
                                        console.log(opcion)
                                        toggleOpcion(opcion)
                                        
                                        
                                }}
                                />
                                ))}
                            </div> {/*Identidad y Valores */}
                            <p className="profile_preview__user_info_title">🥦 Estilo de vida</p>
                            <div className="profile_preview__identity">
                                {lifestyle.map((opcion) => (
                      <UserTag
                        key={opcion}
                        text={opcion}
                        isSelected={seleccionados.includes(opcion)}
                        onClick={() => {
                            console.log(opcion)
                            toggleOpcion(opcion)
                    }}
                      />
                    ))}
                                </div> {/*Estilo de Vida */}
                            <p className="profile_preview__user_info_title">🧘‍♀️ Convivencia y hábitos</p>
                            <div className="profile_preview__identity">
                                {habits.map((opcion) => (
                      <UserTag
                        key={opcion}
                        text={opcion}
                        isSelected={seleccionados.includes(opcion)}
                        onClick={() => {
                            console.log(opcion)
                            toggleOpcion(opcion)
                    }}
                      />
                    ))}
                                </div> {/*Convivencia y Hábitos */}
                                <p className="profile_preview__user_info_title">🐶 Mascotas</p>
                            <div className="profile_preview__identity">
                                {pets.map((opcion) => (
                                <UserTag
                                key={opcion}
                                text={opcion}
                                isSelected={seleccionados.includes(opcion)}
                                onClick={() => {
                                    console.log(opcion)
                                    toggleOpcion(opcion)
                    }}
                      />
                    ))}
                            </div> {/*Mascotas */}
                            <p className="profile_preview__user_info_title">🚭 Límites y preferencias</p>
                            <div className="profile_preview__identity">
                                {limits.map((opcion) => (
                                <UserTag
                                key={opcion}
                                text={opcion}
                                isSelected={seleccionados.includes(opcion)}
                                onClick={() => {
                                    console.log(opcion)
                                    toggleOpcion(opcion)
                    }}
                      />
                    ))}
                            </div>
                             </>
                            
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*8}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <RegisterFlowQuestion title="¿Cómo prefieres organizar los gastos del piso?" subtitle="No hay una forma única, lo importante es hablarlo desde el principio."/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    handleMove();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
    </div>
    <div className="register_flow_footer">
        <DeskFooter/>
    </div>
</div>
    );
};
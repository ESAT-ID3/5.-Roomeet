import "./RegisterFlow.css"
import { useState, useEffect } from "react";
import { Button } from "../../components/button/Button";
import { Select } from "../../components/select/Select";
import { DeskFooter } from "../../components/deskFooter/DeskFooter";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";
import { Checkboxes } from "../../components/itemToCheck/checkboxes/Checkboxes";
import { RegisterFlowQuestion } from "../../components/register-flow-question/RegisterFlowQuestion";
import { ImageGridUploader } from "../../components/profile-grid/ImageGridUploader";
import { UserTag } from "../../components/edit-profile/user-tags/UserTag";
import { MinMaxInput } from "../../components/minMaxInput/MinMaxInput";
import { Counter } from "../../components/counter/Counter";
import { Input } from "../../components/input/Input";
import { Icons } from "../../components/icons/Icons";

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

    const [fecha, setFecha] = useState('');

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


    const windowWidth = window.innerWidth; // Obtiene el ancho de la ventana (100vw)
     const moveForward = () => {
    setPosition(position - windowWidth); // Desplaza el div por el ancho de la ventana
  };

  const moveBackwards = () => {
    setPosition(position + windowWidth); // Desplaza el div por el ancho de la ventana
  };

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
    tienePiso: null,
  });

  // Función para actualizar el estado del checkbox correspondiente
  const handleCheckboxChange = (section: string, value: string | null) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

const [formData, setFormData] = useState({
  descripcion: '',
  duracionAlquiler: '',
  gestionGastos: '',
  costumbresHabitos: '',
  buscaPersona: '',
  rutinaNecesidad: '',
  roomDescription:'',
  roomLocation:'',
  roomRules:'',
});

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
            <div className={step >= 7 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 8 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 9 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 10 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 11 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 12 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 13 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={step >= 14 ? "register_flow_step completed" : "register_flow_step"}></div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                <div className="register_flow_question__return"><Icons name="arrow_left"/></div>
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
                    moveForward();
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
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¿Cuál es tu fecha de nacimiento?" subtitle="Solo mostraremos tu edad, no la fecha exacta."/>
                <input
                type="date"
                min="1900-01-01"
                max="2025-12-31"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="budget_input"
                />
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
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
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¿Con qué género te identificas?" subtitle="Puedes no contestar si lo prefieres."/>
                <div className="profile_preview__identity">
                        <Select options={["Hombre", "Mujer", "Otro", "Prefiero no contestar"]}
                        value={formData.gestionGastos}
                        onChange={value => setFormData({...formData, gestionGastos: value})}/>
                    </div>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
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
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¿A qué te dedicas?" subtitle="Ayuda a otros a conocerte un poco más."/>
                <div className="budget_input_container">
                <Input icon2="briefcase" placeholder="Soy..." size="16" viewBox="0 0 16 16"/>
                </div>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
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
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¿En qué ciudad estás buscando o vives actualmente?" subtitle="Esto nos ayuda a mostrarte personas cerca de ti."/>
                <Input icon2="location" placeholder="Busco / Estoy en..." size="16" viewBox="0 0 16 16"/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
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
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Cuéntanos sobre ti" subtitle="¿Cómo eres? ¿Qué te gusta? ¿Qué tipo de convivencia buscas?"/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
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
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Muestra tu día a día" subtitle="Sube fotos que hablen de ti: tu energía, tu estilo de vida, tu esencia. ¡Haz que otros te conozcan un poco más!"/>
                </div>
                <ImageGridUploader/>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
  className="register_flow_container2"
  style={{
    transform: `translateX(${position + window.innerWidth * 7}px)`,
    transition: "transform 0.5s ease",
  }}
>
  <div className="register_flow_question">
    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
    <RegisterFlowQuestion 
      title="¿Qué te representa?" 
      subtitle="Elige etiquetas que te describan o sean importantes para ti (máximo 6)." 
    />

    <p className="profile_preview__user_info_title">🏳️‍🌈 Identidad y Valores</p>
    <div className="profile_preview__identity">
      {identity.map((opcion) => (
        <UserTag
          key={opcion}
          text={opcion}
          isSelected={seleccionados.includes(opcion)}
          onClick={() => toggleOpcion(opcion)}
        />
      ))}
    </div>

    <p className="profile_preview__user_info_title">🥦 Estilo de vida</p>
    <div className="profile_preview__identity">
      {lifestyle.map((opcion) => (
        <UserTag
          key={opcion}
          text={opcion}
          isSelected={seleccionados.includes(opcion)}
          onClick={() => toggleOpcion(opcion)}
        />
      ))}
    </div>

    <p className="profile_preview__user_info_title">🧘‍♀️ Convivencia y hábitos</p>
    <div className="profile_preview__identity">
      {habits.map((opcion) => (
        <UserTag
          key={opcion}
          text={opcion}
          isSelected={seleccionados.includes(opcion)}
          onClick={() => toggleOpcion(opcion)}
        />
      ))}
    </div>

    <p className="profile_preview__user_info_title">🐶 Mascotas</p>
    <div className="profile_preview__identity">
      {pets.map((opcion) => (
        <UserTag
          key={opcion}
          text={opcion}
          isSelected={seleccionados.includes(opcion)}
          onClick={() => toggleOpcion(opcion)}
        />
      ))}
    </div>

    <p className="profile_preview__user_info_title">🚭 Límites y preferencias</p>
    <div className="profile_preview__identity">
      {limits.map((opcion) => (
        <UserTag
          key={opcion}
          text={opcion}
          isSelected={seleccionados.includes(opcion)}
          onClick={() => toggleOpcion(opcion)}
        />
      ))}
    </div>
  </div>

  <div className="register_flow_image"></div>

  <div className="register_flow_btn">
    <Button 
      text="Siguiente"
      onClick={() => {
        moveForward();
        setStep(step + 1);
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
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¿Cómo prefieres organizar los gastos del piso?" subtitle="No hay una forma única, lo importante es hablarlo desde el principio."/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*9}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Responde algunas preguntas para que te conozcamos mejor" subtitle="No son obligatorias pero así será más fácil encontrar personas afines a ti."/>
                <p className="profile_preview__user_info_title">❤️ Sobre mí</p>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Ej: Tranquila y sociable. Me gusta cocinar, ver pelis y tener buen ambiente en casa."
                        value={formData.descripcion}
                        onChange={e => setFormData({...formData, descripcion: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                
                {/*Sobre mí */}
            <p className="profile_preview__user_info_title">💸 Forma de gestionar los gastos</p>
                    <div className="profile_preview__identity">
                        <Select options={["Cada uno controla y paga sus gastos", "Los gastos totales de la casa se dividen por igual", "Me adapto a otras formas"]}
                        value={formData.gestionGastos}
                        onChange={value => setFormData({...formData, gestionGastos: value})}/>
                    </div> {/*¿Cómo prefieres gestionar los gastos? */}
            <p className="profile_preview__user_info_title">🙊 ¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas?</p>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Ej: Me gusta escuchar música por las mañanas, necesito silencio para dormir, hago yoga en el salón cada tarde."
                        value={formData.costumbresHabitos}
                        onChange={e => setFormData({...formData, costumbresHabitos: e.target.value})}/>
                        <p className="textarea__counter">{formData.costumbresHabitos.length}/500</p>
                    </div> {/* cierre del div de costumbres y hábitos */}

                    <p className="profile_preview__user_info_title">👀 ¿Qué buscas en una persona con la que compartir piso?</p>
                    <div className="profile_preview__identity">
                    <textarea
                        placeholder="Ej: Alguien respetuoso con los espacios comunes, que le guste charlar de vez en cuando y que se implique en mantener el piso bien."
                        value={formData.buscaPersona}
                        onChange={e => setFormData({...formData, buscaPersona: e.target.value})}
                    />
                    <p className="textarea__counter">{formData.buscaPersona.length}/500</p>
                    </div>

            <p className="profile_preview__user_info_title">❌ ¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran?</p>
                    <div className="profile_preview__identity">
                        <textarea placeholder="Ej: Me levanto muy temprano por trabajo, así que suelo irme a dormir pronto. Me gusta tener la cocina recogida por la noche."
                        value={formData.rutinaNecesidad}
                        onChange={e => setFormData({...formData, rutinaNecesidad: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>

                {/*¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran? */}
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>

        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*10}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¿Cuál es tu presupuesto mensual?" subtitle="Esto ayuda a encontrar opciones acordes a tu bolsillo."/>
                <MinMaxInput/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*11}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¿Por cuánto tiempo quieres quedarte?" subtitle="Solo usaremos esto para mejorar los resultados."/>
                <div className="profile_preview__identity">
                        <Select options={["Menos de 3 meses","Entre 3 y 6 meses","Entre 6 y 12 meses", "Más de 1 año", "Aún no lo sé"]}
                        value={formData.duracionAlquiler}
                        onChange={value => setFormData({...formData, duracionAlquiler: value})}/>
                    </div>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>

        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*12}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Descripción del piso" subtitle="Describe brevemente el piso y el ambiente que se vive. ¿Cuántos sois?, ¿cómo os lleváis?, ¿qué os hace únicos?"/>
                <div className="profile_preview__identity">
                        <textarea placeholder="Añade una descripción del piso"
                        value={formData.roomDescription}
                        onChange={e => setFormData({...formData, roomDescription: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*13}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Ubicación / Zona" subtitle="Indica la zona, barrio o alguna referencia para que las personas interesadas se hagan una idea del entorno."/>
                <div className="profile_preview__identity">
                        <textarea placeholder="Añade la ubicación del piso"
                        value={formData.roomLocation}
                        onChange={e => setFormData({...formData, roomLocation: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>

        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*14}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Fotos del piso" subtitle="Añade algunas fotos del piso y de la habitación libre. Así quienes lo vean tendrán una mejor idea del espacio."/>
                
                </div>
                <ImageGridUploader/>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>

        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*15}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Reglas del hogar" subtitle="Cuéntanos cómo se vive en el piso: normas de limpieza, visitas, fiestas, horarios... Todo lo que alguien debería saber antes de mudarse."/>
                <div className="profile_preview__identity">
                        <textarea placeholder="Añade las reglas del hogar"
                        value={formData.roomRules}
                        onChange={e => setFormData({...formData, roomRules: e.target.value})}/>
                        <p className="textarea__counter">0/500</p>
                    </div>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>

        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*16}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="Detalles del piso" subtitle="Completa estos datos básicos sobre el piso para ayudar a los demás a saber cómo es el espacio."/>
                                  
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
                                        <div className="room_profile_preview__room_details__flex">
                                            <p>Precio mensual del aquiler por persona</p>
                                            <div className="budget_input_container">
                                            <input type="number" min="0" placeholder="Presupuesto (€)" className="budget_input" />
                                            </div>
                                        </div>
                                    </div>

                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="Siguiente"
                    onClick={() => {
                    moveForward();
                    setStep(step+1);
                    }}
        
                    />
                </div>
        </div>
        <div 
            className="register_flow_container2"
            style={{
            transform: `translateX(${position + window.innerWidth*17}px)`,  // Desplaza el div si `moved` es true
            transition: "transform 0.5s ease",  // Hace el movimiento suave
            }}>
                <div className="register_flow_question">
                    <div className="register_flow_question__return"
                onClick={() => {
                    moveBackwards();
                    setStep(step-1);
                    }}><Icons name="arrow_left"/></div>
                <RegisterFlowQuestion title="¡Has completado el registro!" subtitle="¡Comienza a buscar a tus próximos compañeros/as de piso en el apartado Swipe!"/>
                </div>
                <div className="register_flow_image">
                </div>
                <div className="register_flow_btn">
                    <Button 
                    text="¡Vamos allá!"
                    onClick={() => {
                    moveForward();
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
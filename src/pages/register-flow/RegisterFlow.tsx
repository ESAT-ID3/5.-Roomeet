import "./RegisterFlow.css"
import { useState, useEffect } from "react";
import { Button } from "../../components/button/Button";
import { Select } from "../../components/select/Select";
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
import { Link } from "react-router";

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

const noSelectedRoom = () => {
    toast.error('¡Selecciona una opción antes de avanzar!', {
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



  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1));
  };

  const [counters, setCounters] = useState<number[]>([0, 0]); // Estado para manejar los valores de todos los contadores

  const updateCounter = (index: number, value: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index] = value; // Actualiza solo el contador que se está modificando
    setCounters(updatedCounters); // Establece el estado actualizado
  };

const [checkboxStates, setCheckboxStates] = useState({
    searchingRoom: null, // Estado para "¿Tienes piso?"
    hasLivingRoom: null,      // Estado para "¿Tiene salón?"
    allowSmoking: null, // Estado para "¿Se permite fumar?"
    furnitured: null,   // Estado para "¿Está amueblado?"
  });

  // Función para actualizar el estado del checkbox correspondiente
  const handleCheckboxChange = (section: string, value: string | null) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

const [formData, setFormData] = useState({
    genre: '',
    aboutMe: '',
    rentDuration: '',
    expenseManagement: '',
    habits: '',
    searchPerson: '',
    routines: '',
    roomDescription:'',
    roomLocation:'',
    roomRules:'',
});

    return (
<div>
    <ToastContainer/>
    <div className="register_flow_container">
        <div className="register_flow_steps__container">
            <div className={index >= 0 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 1 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 2 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 3 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 4 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 5 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 6 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 7 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 8 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 9 ? "register_flow_step completed" : "register_flow_step"}></div>
            <div className={index >= 10 ? "register_flow_step completed" : "register_flow_step"}></div>
                
            {checkboxStates.searchingRoom === "Sí, estoy buscando compañeros de piso" && (
            <>
                
                <div className={index >= 11 ? "register_flow_step completed" : "register_flow_step"}></div>
                <div className={index >= 12 ? "register_flow_step completed" : "register_flow_step"}></div>
                <div className={index >= 13 ? "register_flow_step completed" : "register_flow_step"}></div>
                
            </>
            )}
            
        </div>
        <div className="register_flow_wrapper" style={{ transform: `translateX(-${index * 100}vw)` }}>
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                    <div className="register_flow_question__return"></div>
                    <RegisterFlowQuestion title="¿Tienes piso actualmente?" subtitle="Si ya tienes piso, podrás crear su perfil para buscar compañeros. Si no, te mostraremos personas con habitaciones libres."/>
                    <Checkboxes
                    selected={checkboxStates.searchingRoom}
                    onChange={(value) => handleCheckboxChange('searchingRoom', value)}
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
                            if (checkboxStates.searchingRoom === "No, estoy buscando piso y compañeros" || checkboxStates.searchingRoom === "Sí, estoy buscando compañeros de piso"){
                            nextSlide();
                            } else {
                            noSelectedRoom();
                            console.log("bruh")
                            }}
                        }
                        />
                    </div>
            </div>
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
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
                        onClick={nextSlide}
                        />
                    </div>
            </div>
            
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="¿Con qué género te identificas?" subtitle="Puedes no contestar si lo prefieres."/>
                    <div className="profile_preview__identity">
                            <Select options={["Hombre", "Mujer", "Otro", "Prefiero no contestar"]}
                            value={formData.genre}
                            onChange={value => setFormData({...formData, genre: value})}/>
                        </div>
                    </div>
                    <div className="register_flow_image">
                    </div>
                    <div className="register_flow_btn">
                        <Button 
                        text="Siguiente"
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
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
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="¿En qué ciudad estás buscando o vives actualmente?" subtitle="Esto nos ayuda a mostrarte personas cerca de ti."/>
                    <Input icon2="location" placeholder="Busco / Estoy en..." size="16" viewBox="0 0 16 16"/>
                    </div>
                    <div className="register_flow_image">
                    </div>
                    <div className="register_flow_btn">
                        <Button 
                        text="Siguiente"
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>

            <div 
                className={index === 6 ? "register_flow__question_container" : "register_flow__question_container overflow"}
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="Muestra tu día a día" subtitle="Sube fotos que hablen de ti: tu energía, tu estilo de vida, tu esencia. ¡Haz que otros te conozcan un poco más!"/>
                    </div>
                    <ImageGridUploader/>
                    <div className="register_flow_btn">
                        <Button 
                        text="Siguiente"
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>
            <div 
    className={index === 7 ? "register_flow__question_container" : "register_flow__question_container overflow"}
    
    >
    <div className="register_flow_question">
        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
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


    <div className="register_flow_btn">
        <Button 
        text="Siguiente"
        onClick={() => {
            nextSlide();
}}
        />
    </div>
    </div>


            <div 
                className={index === 8 ? "register_flow__question_container" : "register_flow__question_container overflow"}
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="Responde algunas preguntas para que te conozcamos mejor" subtitle="No son obligatorias pero así será más fácil encontrar personas afines a ti."/>
                    <p className="profile_preview__user_info_title">❤️ Sobre mí</p>
                        <div className="profile_preview__identity">
                            <textarea placeholder="Ej: Tranquila y sociable. Me gusta cocinar, ver pelis y tener buen ambiente en casa."
                            value={formData.aboutMe}
                            onChange={e => setFormData({...formData, aboutMe: e.target.value})}/>
                            <p className="textarea__counter">0/500</p>
                        </div>
                    
                    {/*Sobre mí */}
                <p className="profile_preview__user_info_title">💸 Forma de gestionar los gastos</p>
                        <div className="profile_preview__identity">
                            <Select options={["Cada uno controla y paga sus gastos", "Los gastos totales de la casa se dividen por igual", "Me adapto a otras formas"]}
                            value={formData.expenseManagement}
                            onChange={value => setFormData({...formData, expenseManagement: value})}/>
                        </div> {/*¿Cómo prefieres gestionar los gastos? */}
                <p className="profile_preview__user_info_title">🙊 ¿Qué costumbres y hábitos deberían saber de ti a la hora de convivir con otras personas?</p>
                        <div className="profile_preview__identity">
                            <textarea placeholder="Ej: Me gusta escuchar música por las mañanas, necesito silencio para dormir, hago yoga en el salón cada tarde."
                            value={formData.habits}
                            onChange={e => setFormData({...formData, habits: e.target.value})}/>
                            <p className="textarea__counter">{formData.habits.length}/500</p>
                        </div> {/* cierre del div de costumbres y hábitos */}

                        <p className="profile_preview__user_info_title">👀 ¿Qué buscas en una persona con la que compartir piso?</p>
                        <div className="profile_preview__identity">
                        <textarea
                            placeholder="Ej: Alguien respetuoso con los espacios comunes, que le guste charlar de vez en cuando y que se implique en mantener el piso bien."
                            value={formData.searchPerson}
                            onChange={e => setFormData({...formData, searchPerson: e.target.value})}
                        />
                        <p className="textarea__counter">{formData.searchPerson.length}/500</p>
                        </div>

                <p className="profile_preview__user_info_title">❌ ¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran?</p>
                        <div className="profile_preview__identity">
                            <textarea placeholder="Ej: Me levanto muy temprano por trabajo, así que suelo irme a dormir pronto. Me gusta tener la cocina recogida por la noche."
                            value={formData.routines}
                            onChange={e => setFormData({...formData, routines: e.target.value})}/>
                            <p className="textarea__counter">0/500</p>
                        </div>

                    {/*¿Tienes alguna rutina o necesidad especial que te gustaría que respetaran? */}
                    </div>
                    <div className="register_flow_btn">
                        <Button 
                        text="Siguiente"
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>
            {checkboxStates.searchingRoom === "No, estoy buscando piso y compañeros" && (
            <>
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="¿Cuál es tu presupuesto mensual?" subtitle="Esto ayuda a encontrar opciones acordes a tu bolsillo."/>
                    <MinMaxInput/>
                    </div>
                    <div className="register_flow_image">
                    </div>
                    <div className="register_flow_btn">
                        <Button 
                        text="Siguiente"
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="¿Por cuánto tiempo quieres quedarte?" subtitle="Solo usaremos esto para mejorar los resultados."/>
                    <div className="profile_preview__identity">
                            <Select options={["Menos de 3 meses","Entre 3 y 6 meses","Entre 6 y 12 meses", "Más de 1 año", "Aún no lo sé"]}
                            value={formData.rentDuration}
                            onChange={value => setFormData({...formData, rentDuration: value})}/>
                        </div>
                    </div>
                    <div className="register_flow_image">
                    </div>
                    <div className="register_flow_btn">
                        <Button 
                        text="Siguiente"
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>

            </>
            )}
            {checkboxStates.searchingRoom === "Sí, estoy buscando compañeros de piso" && (
            <>
               

            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
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
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
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
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>

            <div 
                className={index === 13 ? "register_flow__question_container" : "register_flow__question_container overflow"}
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="Fotos del piso" subtitle="Añade algunas fotos del piso y de la habitación libre. Así quienes lo vean tendrán una mejor idea del espacio."/>
                    
                    </div>
                    <ImageGridUploader/>

                    <div className="register_flow_btn">
                        <Button 
                        text="Siguiente"
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>

            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
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
                        onClick={nextSlide}
            
                        />
                    </div>
            </div>

            <div 
                className={index === 15 ? "register_flow__question_container" : "register_flow__question_container overflow"}
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
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
                                                selected={checkboxStates.hasLivingRoom}
                                                onChange={(value) => handleCheckboxChange('hasLivingRoom', value)}
                                                option1="Sí"
                                                option2="No"
                                                />
                                            </div>
                                            <div className="room_profile_preview__room_details__flex">
                                                <p>¿Se permite fumar?</p>
                                                <Checkboxes
                                                selected={checkboxStates.allowSmoking}
                                                onChange={(value) => handleCheckboxChange('allowSmoking', value)}
                                                option1="Sí"
                                                option2="No"
                                                />
                                            </div>
                                            <div className="room_profile_preview__room_details__flex">
                                                <p>¿Está amueblado?</p>
                                                <Checkboxes
                                                selected={checkboxStates.furnitured}
                                                onChange={(value) => handleCheckboxChange('furnitured', value)}
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
                        onClick={nextSlide}
            
                        />
                    </div>
            </div> 
            </>
            )}
            

            
            <div 
                className="register_flow__question_container"
                >
                    <div className="register_flow_question">
                        <div className="register_flow_question__return"
                    onClick={prevSlide}><Icons name="arrow_left"/></div>
                    <RegisterFlowQuestion title="¡Has completado el registro!" subtitle="¡Comienza a buscar a tus próximos compañeros/as de piso en el apartado Swipe!"/>
                    </div>
                    <div className="register_flow_image">
                    </div>
                    <Link to="/swipe" className="register_flow_btn">
                        <Button 
                        text="¡Vamos allá!"
                        onClick={nextSlide}
            
                        />
                    </Link>
            </div>
        </div>
    </div>
    <div className="register_flow_footer">
    </div>
</div>
    );
}
import { useState } from "react";
import { LoginPage } from "../login/LoginPage";
import { Register } from "../register/Register";
import { Button } from "../../components/button/Button";
import "./AuthSliderV2.css"; // Animaciones aquí

export const AuthSliderV2 = () => {
  const [slide, setSlide] = useState(false); // ← nuevo estado
  const [slideMobile, setSlideMobile] = useState(false); // ← nuevo estado

  const handleChildClick = () => {
    slideMobile ? setSlideMobile(false) : setSlideMobile(true);
  };

  return (
    <>
      {/* DIV QUE SE MUEVE */}
      <div className={`login__page_footer_container absolute_right ${slide ? 'slide-right' : ''}`}>
        <div className="login__page_footer_container_mobile">
          <span></span>
          <h3>¿Aún no tienes cuenta?</h3>
          <span></span>
        </div>
        <h4>¡Únete a miles de Roomeets más en la búsqueda del compañero de piso perfecto!</h4>
        <div className="login__page_footer_container_mobile_button">
          <Button
            text="Regístrate"
            color="black"
            onClick={() => {
              console.log("Click en Regístrate");
              if (!slide){
              setSlide(true); // activa la animación
              }
              else {
                setSlide(false)
              }
              
            }}
          />
        </div>
      </div>

      <div className={`login__page_footer_container absolute_left ${slide ? 'slide-left' : ''}`}>
        <div className="login__page_footer_container_mobile">
          <span></span>
          <h3>¿Ya tienes una cuenta?</h3>
          <span></span>
        </div>
        <h4>¡Tú próximo compañero/a de piso perfecto está a la vuelta de la esquina!</h4>
        <div className="login__page_footer_container_mobile_button">
        <Button
          text="Inicia sesión"
          color="black"
          onClick={() => {
            console.log("Click en Regístrate");
            if (!slide){
            setSlide(true); // activa la animación
            }
            else {
              setSlide(false)
            }
            
          }}
        />
        </div>
      </div>


      {/* CONTENEDOR QUE ESTABA DEBAJO */}
      <div className="auth_slider__container">
        <LoginPage/>
        <Register/>
      </div>
      <div className="auth_slider__container_mobile">
        <div className="auth_slider__container_mobile_wrapper" style={{ transform: `translateX(${slideMobile ? '-100vw' : '0vw'})` }}>
          <LoginPage onButtonClick={handleChildClick}/>
          <Register onButtonClick={handleChildClick}/>
        </div>
      </div>
    </>
  );
};

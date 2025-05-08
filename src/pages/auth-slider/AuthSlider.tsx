import { useState } from "react";
import { LoginPage } from "../login/LoginPage";
import { Register } from "../register/Register";
import "./AuthSlider.css"; // aquí defines las clases para el desplazamiento

export const AuthSlider = () => {
    const [isLogin, setIsLogin] = useState(true);
  
    return (
      <div className="auth-slider">
        <div className={`auth-slider__inner ${isLogin ? "" : "slide-left"}`}>
          <div className="auth-panel">
            <LoginPage onSwitch={() => setIsLogin(false)} />
          </div>
          <div className="auth-panel">
            <Register onSwitch={() => setIsLogin(true)} />
          </div>
        </div>
      </div>
    );
  };
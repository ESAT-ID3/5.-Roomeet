import './NavLanding.css';
import { Link } from 'react-router';

export const NavLanding = () => {
    return (
        <div className="nav_landing_container">
          <div className="logo_container">
          </div>
          <div className="buttons-container">
    
            <button className="contact-button">Contacto</button>
            <button className="faq-button">Preguntas frecuentes</button>
            <Link to="/loginanimation2">
            <button className="login-button">Log in / Sign Up</button>
            </Link>
          </div>
        </div>
      );
};

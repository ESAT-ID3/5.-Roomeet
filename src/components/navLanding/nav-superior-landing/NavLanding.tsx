import './NavLanding.css';
import { Link } from 'react-router';

interface NavLandingProps {
  color?: boolean;
}

export const NavLanding = ({color}:NavLandingProps) => {
    return (
        <div className="nav_landing_container">
          <Link to="/">
          <div className="logo_container">
          </div>
          </Link>
          <div className="buttons-container">
            <Link to="/contact" className='buttons_link'>
            <button className="contact-button" style={color ? { color: "black" } : {}}>Contacto</button>
            </Link>
            <Link to="/faq" className='buttons_link'>
            <button className="faq-button" style={color ? { color: "black" } : {}}>Preguntas frecuentes</button>
            </Link>
            <Link to="/loginanimation2">
            <button className="login-button">Log in / Sign Up</button>
            </Link>
          </div>
        </div>
      );
};

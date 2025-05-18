import './NavLanding.css';

export const NavLanding = () => {
    return (
        <div className="reader">
          <div className="logo-container">
            <img src="logo.png" alt="Logo" className="logo" />
          </div>
          <div className="buttons-container">
            {/* Mostrar solo el SVG en pantallas pequeñas */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="menu-icon"
            >
              <path
                d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z"
                fill="#202020"
              />
            </svg>
    
            <button className="contact-button">Contacto</button>
            <button className="faq-button">Preguntas frecuentes</button>
            <button className="login-button">Log in</button>
          </div>
        </div>
      );
};

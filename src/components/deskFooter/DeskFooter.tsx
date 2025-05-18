import './DeskFooter.css'



export const DeskFooter = () => {
    return(
        
        <footer className="footer">
             <div className="footer-column">
                <p className="footer-title">Info y contacto</p>
                <p className="footer-text">Preguntas Frecuentes</p>
                <p className="footer-text">Contacto</p>
            </div>
            <div className="footer-column">
                <p className="footer-title">Legal</p>
                <p className="footer-text">Política de Privacidad
                y Cookies</p>
            </div>
            <div className="footer-column">
                <p className="footer-title">Facebook | Instagram | Twitter | LinkedIn</p>
                <p className="footer-small-text">© 2025 Roomeet. Todos los derechos reservados.</p>
            </div>
        </footer>

        

    );
 
};
import "./Settings.css"
import { Icons } from "../../components/icons/Icons";

export const Settings = () => {

    return (
        <div className="settings__container">
            <div className="settings__header">
                <h1>Configuración</h1>
                <Icons name="chevron" viewBox ='0 0 24 24' size="30"/>
            </div>
            <div className="settings__privacy">
                <h2>Privacidad</h2>
                <div className="settings__privacy__info"></div>
            </div>
            <div className="settings__notifications">
                <h2>Notificaciones</h2>
                <div className="settings__privacy__info"></div>
            </div>
            <div className="settings__help">
                <h2>Ayuda</h2>
                <div className="settings__privacy__info"></div>
            </div>
            <div className="settings__my_acount">
                <h2>Mi cuenta</h2>
                <div className="settings__privacy__info"></div>
            </div>  
        </div>
    );
};
import "./Social.css"
import { Icons } from "../icons/Icons";
import type { IconName } from "../icons/Icons";

interface SocialProps {
    name: IconName; // Nombre del icono social, como "google", "facebook", etc.
}

export const Social = ({name}:SocialProps) => {

    
    return (
        <div className="social__container">
            <Icons name={name} size="36" color="white" viewBox="0 0 24 24"/>
        </div>
    );
};
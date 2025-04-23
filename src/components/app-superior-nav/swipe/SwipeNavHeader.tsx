import "./SwipeNavHeader.css"
import logo from "../../../assets/images/Logo.png"
import { Icons } from "../../icons/Icons" 

export const SwipeNavHeader = () => {
  

    return (
    <div className="nav-header">
        <img src={logo} alt="Logo" />
        <div className="nav_icons">
            <Icon name="settings" color="#202020" />
        </div>
    </div>
    );
};
import "./SwipeNavHeader.css"
import logo from "../../../assets/images/Logo.png"
import { Icons } from "../../icons/Icons" 

export const SwipeNavHeader = ({name, color, size="24"}) => {
  

    return (
    <div className="nav-header">
        <img src={logo} alt="Logo" />
        <div className="nav_icons">
            <Icons name={name} color={color} size={size}/>
        </div>
    </div>
    );
};
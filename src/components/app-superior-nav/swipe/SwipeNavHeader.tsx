import "./SwipeNavHeader.css"
import logo from "../../../assets/images/Logo.png"
import { Icons } from "../../icons/Icons" 

export const SwipeNavHeader = ({icon1,icon2, color, size="24"}) => {

    return (
    <div className="nav-header">
        <img src={logo} alt="Logo" />
        <div className="nav_icons">
            <Icons name={icon1} color={color} size={size}/>
            <Icons name={icon2} color={color} size={size}/>
        </div>
    </div>
    );
};
import "./SwipeNavHeader.css"
import logo from "../../../assets/images/Logo.png"
import { Icons } from "../../icons/Icons" 
import { Link } from "react-router";

import type { IconName } from "../../icons/Icons";

interface SwipeNavHeaderProps {
    icon1?: IconName;
    icon2?: IconName;
    color?: string;
    size?: string;
}

export const SwipeNavHeader :React.FC<SwipeNavHeaderProps> = ({icon1,icon2, color, size="24"}) => {

    return (
    <div className="nav-header">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
        <div className="nav_icons">
            {icon1 && <Icons name={icon1} color={color} size={size}/>}
            {icon2 && <Icons name={icon2} color={color} size={size}/>}
        </div>
    </div>
    );
};
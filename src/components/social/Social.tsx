import "./Social.css"
import { Icons } from "../icons/Icons";

export const Social = ({name}) => {

    return (
        <div className="social__container">
            <Icons name={name} size="36" color="white" viewBox="0 0 24 24"/>
        </div>
    );
};
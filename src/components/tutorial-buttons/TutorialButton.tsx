import "./TutorialButton.css"
import { Icons } from "../icons/Icons"

import type { IconName } from "../icons/Icons";

interface ButtonType {
  text: string; // Texto del botón
  icon?: IconName; // Icono opcional
}

export const TutorialButton = ({text, icon }:ButtonType) => {

  return (
    <div className="tutorial_button_container">
        {icon && <div className="tutorial_button__icon_container"> {/*Si tiene un icono escrito, renderiza este container y el icono*/}
        <Icons name={icon} color="#4d4d4d" viewBox="0 0 25 24" />
        </div>}
        {!icon && <div className="tutorial_button__space"> {/*Sino tiene un icono escrito, renderiza este otro container sin icono */}
        </div>}
        {text}
    </div>
  )
}
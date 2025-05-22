import "./Button.css"
import { Icons } from "../icons/Icons"

interface ButtonType {
  text: string,
  icon?: string,
  color?: "yellow" | "black" | "red" | "disabled" /*El ? significa que no es obligatorio ponerle un color*/
}

export const Button = ({text,color="yellow", onClick, icon }:ButtonType) => {

  return (
    <div>
    
      <button onClick={onClick} className={`${color} general_button`}>
        {icon === "yes" && color === "disabled" && <Icons name="block" color="#BFBFBF" viewBox="0 0 25 24"/>}
        {icon === "yes" && color === "red" && <Icons name="block" color="white" viewBox="0 0 25 24"/>}
        {text}
      </button>
    </div>
  )
}


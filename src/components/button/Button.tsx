import "./Button.css"

interface ButtonType {
  text: string,
  color?: "yellow" | "black" /*El ? significa que no es obligatorio ponerle un color*/
}

export const Button = ({text,color="yellow", onClick }:ButtonType) => {

  return (
    <>
      <button onClick={onClick} className={color}>{text}</button>
    </>
  )
}


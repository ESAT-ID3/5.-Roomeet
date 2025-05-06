import "./match.css"
import { PicturesMatch } from "../../components/pictures-match/PicturesMatch";
import { Button } from "../../components/button/Button";

export const Match = () => {

    return (
        <div className="match__container">
            <PicturesMatch/>
            <div className="match__text">
                <h1>Match</h1>
                <p>¡María quiere ser tu compañera de piso!<br></br>
                Escríbele cuanto antes...</p>
            </div>
            <div className="match__send_msg">
                <Button text="Enviar mensaje"></Button>
                <p>Seguir swipeando</p>
            </div>
        </div>
    );
};
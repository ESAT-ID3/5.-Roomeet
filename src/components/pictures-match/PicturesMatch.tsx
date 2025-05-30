import "./PicturesMatch.css"
import {Icons} from "../icons/Icons"
import pic1 from "../../assets/images/pic1.jpg" //Ver como hacer esto para coger las imágenes de una base de datos
import pic2 from "../../assets/images/pic2.jpg"

export const PicturesMatch = () => {

  
    return (
      <div className="img-container">
        <div
          className="picture"
          style={{
            backgroundImage: `url(${pic1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="picture"
          style={{
            backgroundImage: `url(${pic2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="house">
          <Icons name="match" size="32" color="#202020" />
        </div>
      </div>
    );
  };

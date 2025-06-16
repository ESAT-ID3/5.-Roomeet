import "./CarrouselMatches.css"
import carrousselMatch1 from "../../assets/images/carrouselMatch1.png";
import carrousselMatch2 from "../../assets/images/carrouselMatch2.png";
import carrousselMatch3 from "../../assets/images/carrouselMatch3.png";
import carrousselMatch4 from "../../assets/images/carrouselMatch4.png";
import carrousselMatch5 from "../../assets/images/carrouselMatch5.png";
import carrousselMatch6 from "../../assets/images/carrouselMatch6.png";

export const CarrouselMatches = () => {

    return (
    <div className="carroussel_matches__container">
        <p>Nuevos matches</p>
        <div className="carroussel_matches__pictures">
            {matches.length === 0 ? (
            <p>Parece que todavía no has hecho ningún match 🥲</p> // Mensaje cuando no hay divs
            ) : (
            matches.map((picture, index) => (
            <div
                key={index}
                className="carroussel_matches__picture"
                style={{ backgroundImage: `url(${picture})` }}
            ></div>
            ))
            )}
        </div>
    </div>
    );
  };

  const matches: string[] = [
    carrousselMatch1,
    carrousselMatch2,
    carrousselMatch3,
    carrousselMatch4,
    carrousselMatch5,
    carrousselMatch6,
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png",

  ];
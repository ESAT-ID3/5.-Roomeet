import "./CarrouselMatches.css"

export const CarrouselMatches = ({pic1}) => {

    return (
    <div className="carroussel_matches__container">
        <p>Nuevos matches</p>
        <div className="carroussel_matches__pictures">
            <div className="carroussel_matches__picture" style={{
                backgroundImage: `url(${pic1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}></div>
        </div>
    </div>
    );
  };
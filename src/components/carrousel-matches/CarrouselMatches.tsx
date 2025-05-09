import "./CarrouselMatches.css"

export const CarrouselMatches = () => {

    return (
    <div className="carroussel_matches__container">
        <p>Nuevos matches</p>
        <div className="carroussel_matches__pictures">
            {matches.length === 0 ? (
            <p>Parece que todavía no has hecho ningún match</p> // Mensaje cuando no hay divs
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

  const matches = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png",
  ];
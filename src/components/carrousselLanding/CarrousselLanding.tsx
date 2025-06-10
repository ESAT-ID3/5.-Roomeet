
import { useEffect, useRef } from 'react';
import './CarrousselLanding.css';
import img1 from "../../assets/images/carrousel1.png";
import img2 from "../../assets/images/carrousel2.png";
import img3 from "../../assets/images/carrousel3.png";
import img4 from "../../assets/images/carrousel4.png";
import img5 from "../../assets/images/carrousel5.png";

const images: string[] = [
  `${img1}`,
  `${img2}`,
  `${img3}`,
  `${img4}`,
  `${img5}`,
];

export const CarrousselLanding = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrame: number;
    let offset = 0;

    const animate = () => {
      offset -= 1;
      if (track) {
        track.style.transform = `translateX(${offset}px)`;

        // Reset to simulate infinite loop
        if (Math.abs(offset) >= track.scrollWidth / 2) {
          offset = 0;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track" ref={trackRef}>
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="carousel-image"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
}
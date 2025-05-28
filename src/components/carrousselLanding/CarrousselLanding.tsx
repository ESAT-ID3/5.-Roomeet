// MobileCarousel.tsx
// MobileCarousel.tsx
import React, { useEffect, useRef } from 'react';
import './CarrousselLanding.css';

const images: string[] = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg'
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
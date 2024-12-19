"use client";
import React from "react";
import "./Lightbox.scss";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  closeLightbox: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  closeLightbox,
}) => {
  const [index, setIndex] = React.useState(currentIndex);

  const showNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="lightbox">
      <button className="close-btn" onClick={closeLightbox}>
        ✖
      </button>
      <button className="arrow-btn prev-btn" onClick={showPrev}>
        ◀
      </button>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="lightbox-image"
      />
      <button className="arrow-btn next-btn" onClick={showNext}>
        ▶
      </button>
    </div>
  );
};

export default Lightbox;

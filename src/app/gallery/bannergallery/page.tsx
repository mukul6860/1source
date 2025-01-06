"use client";
import React, { useState } from "react";
import "../Gallery.scss";
import Lightbox from "../Lightbox";

const images = [
  "/Assets/gallery/banner/banner1.png",
  "/Assets/gallery/banner/banner2.png",
  "/Assets/gallery/banner/banner3.png",
  "/Assets/gallery/banner/banner4.png",
  "/Assets/gallery/banner/banner5.png",
  "/Assets/gallery/banner/banner6.png",
  "/Assets/gallery/banner/banner7.png",
  "/Assets/gallery/banner/banner8.png",
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  return (
    <div className="gallery-main-container">
      <div className="gallery-tag">Banner's</div>
      <div className="underline"></div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          closeLightbox={closeLightbox}
        />
      )}
    </div>
  );
};

export default Gallery;

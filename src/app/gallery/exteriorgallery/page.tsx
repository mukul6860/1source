"use client";
import React, { useState } from "react";
import "../Gallery.scss";
import Lightbox from "../Lightbox";

const images = [
  "/Assets/gallery/exterior/exterior1.jpeg",
  "/Assets/gallery/exterior/exterior2.jpeg",
  "/Assets/gallery/exterior/exterior3.jpeg",
  "/Assets/gallery/exterior/exterior4.jpeg",
  "/Assets/gallery/exterior/exterior5.jpeg",
  "/Assets/gallery/exterior/exterior7.jpeg",
  "/Assets/gallery/exterior/exterior8.jpeg",
  "/Assets/gallery/exterior/exterior9.jpeg",
  "/Assets/gallery/exterior/exterior10.jpeg",
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
      <div className="gallery-tag">Project gallery</div>
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

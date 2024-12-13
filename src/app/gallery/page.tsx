"use client";
import React, { useState } from "react";
import "./Gallery.scss";
import Lightbox from "./Lightbox";

const images = [
  "/Assets/carddummy.webp",
  "/Assets/download.webp",
  "/Assets/carddummy.webp",
  "/Assets/download.webp",
  "/Assets/carddummy.webp",
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
    <div>
      <div className="gallery-tag">Project gallery</div>
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

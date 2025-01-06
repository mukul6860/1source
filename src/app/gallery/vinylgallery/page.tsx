"use client";
import React, { useState } from "react";
import "../Gallery.scss";
import Lightbox from "../Lightbox";

const images = [
  "/Assets/gallery/vinyl/vinyl1.jpg",
  "/Assets/gallery/vinyl/vinyl2.jpg",
  "/Assets/gallery/vinyl/vinyl3.png",
  "/Assets/gallery/vinyl/vinyl4.png",
  "/Assets/gallery/vinyl/vinyl5.png",
  "/Assets/gallery/vinyl/vinyl6.png",
  "/Assets/gallery/vinyl/vinyl7.png",
  "/Assets/gallery/vinyl/vinyl8.png",
  "/Assets/gallery/vinyl/vinyl9.png",
  "/Assets/gallery/vinyl/vinyl10.png",
  "/Assets/gallery/vinyl/vinyl11.png",
  "/Assets/gallery/vinyl/vinyl12.png",
  "/Assets/gallery/vinyl/vinyl13.png",
  "/Assets/gallery/vinyl/vinyl14.png",
  "/Assets/gallery/vinyl/vinyl15.png",
  "/Assets/gallery/vinyl/vinyl16.png",
  "/Assets/gallery/vinyl/vinyl17.png",
  "/Assets/gallery/vinyl/vinyl18.png",
  "/Assets/gallery/vinyl/vinyl19.png",
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
      <div className="gallery-tag">Vinyl</div>
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

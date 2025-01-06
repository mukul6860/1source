"use client";
import React, { useState } from "react";
import "../Gallery.scss";
import Lightbox from "../Lightbox";

const images = [
  "/Assets/gallery/interior/interior1.jpeg",
  "/Assets/gallery/interior/interior2.jpeg",
  "/Assets/gallery/interior/interior3.jpg",
  "/Assets/gallery/interior/interior4.jpeg",
  "/Assets/gallery/interior/interior5.png",
  "/Assets/gallery/interior/interior6.jpeg",
  "/Assets/gallery/interior/interior7.png",
  "/Assets/gallery/interior/interior8.png",
  "/Assets/gallery/interior/interior9.png",
  "/Assets/gallery/interior/interior10.png",
  "/Assets/gallery/interior/interior11.png",
  "/Assets/gallery/interior/interior12.png",
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

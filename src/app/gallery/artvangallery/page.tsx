"use client";
import React, { useState } from "react";
import "../Gallery.scss";
import Lightbox from "../Lightbox";

const images = [
  "/Assets/Specialty_Photos/ArtVan_Misc/Art Van Canton_05.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Art Van Canton_09.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Art Van Canton_10.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Art Van Canton_11.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Art Van Canton_16.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Art Van Canton_27.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Art Van Polaris_05.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Downers GroveInterior Image_Urban Gallery and Lifestyle Environment.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/Harwood Heights_03.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image1.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image2.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image3.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image4.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image5.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image6.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image7.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image8.jpg",
  "/Assets/Specialty_Photos/ArtVan_Misc/image9.jpg",
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

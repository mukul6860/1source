import React from "react";
import Image from "next/image";
import "./Homepage.scss";
import icon from "../../../public/Assets/watermark.png";

function Serviceareas() {
  return (
    <>
      <div className="space"></div>
      <div className="space"></div>
      <div className="serviceareas-container">
        <div className="serviceareas-sections"></div>
        <div className="serviceareas-sections">
          <div className="serviceareas-content-container">
            <div className="serviceareas-tag">Why choose 1Source?</div>
            <div className="serviceareas-first-border"></div>
            <div className="serviceareas-content">
              At 1Source, we are committed to providing unparalleled quality and
              service in every project we undertake. With over three decades of
              experience, we bring expert craftsmanship and innovative solutions
              to the digital, print, and sign industries. Our diverse portfolio
              of six specialized brands ensures that we can meet the unique
              needs of every client, delivering customized results that exceed
              expectations. Whether you're looking for cutting-edge signage,
              vibrant print solutions, or digital excellence, 1Source stands as
              your trusted partner for all your creative and business needs.
              Choose us for our dedication to precision, creativity, and
              superior customer satisfaction.
            </div>
            <a className="serviceareas-btn" href="/portfolio">
              <div className="icon">
                <Image src={icon} alt="service area icon" />
              </div>
              <span>See our projects</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serviceareas;

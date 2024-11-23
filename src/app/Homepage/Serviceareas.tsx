import React from "react";
import Image from "next/image";
import "./Homepage.scss";
import icon from "../../../public/Assets/watermark.png";

function Serviceareas() {
  return (
    <>
      <div className="serviceareas-container">
        <div className="serviceareas-sections"></div>
        <div className="serviceareas-sections">
          <div className="serviceareas-content-container">
            <div className="serviceareas-tag">
              We are Provide Service Across the Country
            </div>
            <div className="serviceareas-first-border"></div>
            <div className="serviceareas-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="serviceareas-btn">
              <div className="icon">
                <Image src={icon} alt="service area icon" />
              </div>
              See Our Project Map
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serviceareas;

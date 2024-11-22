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
              Explore the world of bo-mar Industries through our project map, a
              testament to our unique blend of functionality and artistry in
              fabrication. This map not only showcases the wide range of our
              projects but also highlights our commitment to exceptional detail
              and quality, regardless of geography. From the intricate
              architectural structures in bustling cities to the sophisticated
              industrial components in remote areas, our project map is a
              testament to our national footprint and versatility. It
              demonstrates how bo-mar Industries has successfully brought its
              distinctive blend of engineering precision and artistic vision to
              clients all over the United States, making every project a
              landmark of innovation and design excellence.
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

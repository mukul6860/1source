import React from "react";
import Image from "next/image";
import "./Homepage.scss";
import awardsimg from "../../../public/Assets/awards and certification/award.jpg";
import iso from "../../../public/Assets/awards and certification/1.webp";
import fsc from "../../../public/Assets/awards and certification/2.jpg";
import nmsdc from "../../../public/Assets/awards and certification/3.webp";
import bbb from "../../../public/Assets/awards and certification/4.jpg";

function OurawardsContainer() {
  return (
    <>
      <div className="ourawards-main-container">
        <div className="ourawards-tag-container">
          <div className="ourawards-tag">Our Awards and Certifications</div>
          <div className="underline"></div>
        </div>
        <div className="ourawards-container">
          <div className="ourawards-wraper">
            <div className="ourawards-card">
              <div className="ourawards-award-container">
                <Image src={awardsimg} alt="award image" />
              </div>
              <div className="ourawards-content">Gold Award</div>
              <div className="ourawards-tag">Large Format Printing</div>
            </div>
            <div className="ourawards-card">
              <div className="ourawards-award-container">
                <Image src={awardsimg} alt="award image" />
              </div>
              <div className="ourawards-content">Silver Award</div>
              <div className="ourawards-tag">ADA Signage</div>
            </div>
            <div className="ourawards-card">
              <div className="ourawards-award-container">
                <Image src={awardsimg} alt="award image" />
              </div>
              <div className="ourawards-content">Silver Award</div>
              <div className="ourawards-tag">Digital Printing</div>
            </div>
            <div className="ourawards-card">
              <div className="ourawards-award-container">
                <Image src={awardsimg} alt="award image" />
              </div>
              <div className="ourawards-content">Bronze Award</div>
              <div className="ourawards-tag">Self-Advertising</div>
            </div>
          </div>
          <div className="ourawards-wraper">
            <div className="ourawards-card flex-center">
              <div className="ourawards-image-container">
                <Image src={iso} alt="iso" />
              </div>
            </div>
            <div className="ourawards-card flex-center">
              <div className="ourawards-image-container">
                <Image src={fsc} alt="fsc" />
              </div>
            </div>
            <div className="ourawards-card flex-center">
              <div className="ourawards-image-container">
                <Image src={nmsdc} alt="nmsdc" />
              </div>
            </div>
            <div className="ourawards-card flex-center">
              <div className="ourawards-image-container">
                <Image className="bbb" src={bbb} alt="bbb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurawardsContainer;

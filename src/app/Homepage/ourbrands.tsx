import React from "react";
import Image from "next/image";
import "./Homepage.scss";
import kgs from "../../../public/Assets/logos/kgs.jpg";
import michigan from "../../../public/Assets/logos/michigan.jpg";
import printology from "../../../public/Assets/logos/printology.jpg";
import screenwork from "../../../public/Assets/logos/screenwork.jpg";
import signtext from "../../../public/Assets/logos/signtext.jpg";

function OurbrandContainer() {
  return (
    <>
      <div className="ourbrand-container">
        <div className="ourbrand-tag-container">
          <div className="ourbrand-tag">Our Brands</div>
          <div className="underline"></div>
        </div>
        <div className="ourbrand-image-wrap">
          <div className="ourbrand-image">
            <Image src={signtext} alt="signtext" />
          </div>
          <div className="ourbrand-image">
            <Image src={kgs} alt="kgs" />
          </div>
          <a className="ourbrand-image" href="https://michigancustomsigns.com/">
            <Image src={michigan} alt="michigan" />
          </a>
          <a className="ourbrand-image" href="https://printnology.net/">
            <Image src={printology} alt="printology" />
          </a>
          <a className="ourbrand-image" href="https://screenworks.graphics/">
            <Image src={screenwork} alt="screenwork" />
          </a>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default OurbrandContainer;

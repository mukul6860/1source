import React from "react";
import Image from "next/image";
import "./Homepage.scss";
import img1 from "../../../public/Assets/products/digital.png";
import img2 from "../../../public/Assets/products/print.png";
import img3 from "../../../public/Assets/products/1simage2.png";

function Ourservicecontainer() {
  return (
    <>
      <div className="Ourservices-container">
        <div className="Ourservices-tag">Your vision, our execution</div>
        <div className="underline"></div>
        <div className="Ourservices-card-wraper">
          <div className="Ourservices-card">
            <div className="Ourservices-card-image">
              <Image src={img1} alt="serivce card 1" />
            </div>
            <div className="Ourservices-card-content">
              <div className="Ourservices-card-tag">Digital</div>
              <div className="Ourservices-card-description">
                We’ll ensure your online presence stays up to date and expertly
                managed.
              </div>
              <ul>
                <li>Logo Design</li>
                <li>Website Design & Development</li>
                <li>SEO & Google Ads</li>
                <li>Social Media Posts</li>
                <li>Email Campaigns</li>
              </ul>
            </div>
          </div>
          <div className="Ourservices-card">
            <div className="Ourservices-card-image">
              <Image src={img2} alt="serivce card 2" />
            </div>
            <div className="Ourservices-card-content">
              <div className="Ourservices-card-tag">Print</div>
              <div className="Ourservices-card-description">
                We have everything you are looking for to support and promote
                your brand.
              </div>
              <ul>
                <li>Signage & Banners</li>
                <li>Wall & Surface Graphics</li>
                <li>Vehicle & Outdoor Graphics</li>
                <li>Custom & Interactive Prints</li>
                <li>Premium & Specialty Prints</li>
              </ul>
            </div>
          </div>
          <div className="Ourservices-card">
            <div className="Ourservices-card-image">
              <Image src={img3} alt="serivce card 3" />
            </div>
            <div className="Ourservices-card-content">
              <div className="Ourservices-card-tag">Sign</div>
              <div className="Ourservices-card-description">
                Oversized signage and advertising for maximum impact.
              </div>
              <ul>
                <li>Dimensional & Architectural Signage</li>
                <li>Wayfinding & Informational Signage</li>
                <li>Custom Decorative & Feature Signage</li>
                <li>Environmental & Graphics</li>
                <li>Recognition & Custom Signage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default Ourservicecontainer;

import React from "react";
import Image from "next/image";
import "./Homepage.scss";
import img1 from "../../../public/Assets/download.jpg";

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
                <li>Content Development</li>
                <li>Social Media</li>
                <li>Ads and Banner Ads</li>
                <li>Website Design & Development</li>
                <li>SEO and Search Promotion</li>
              </ul>
            </div>
          </div>
          <div className="Ourservices-card">
            <div className="Ourservices-card-image">
              <Image src={img1} alt="serivce card 2" />
            </div>
            <div className="Ourservices-card-content">
              <div className="Ourservices-card-tag">Print</div>
              <div className="Ourservices-card-description">
                We have everything you're looking for to support and promote
                your brand..
              </div>
              <ul>
                <li> Brochures & Flyers</li>
                <li>Postcards & Direct Mail Fulfillment</li>
                <li>Stickers & Promotional Items</li>
                <li>Uniforms & Apparel</li>
                <li>Posters & Banners</li>
              </ul>
            </div>
          </div>
          <div className="Ourservices-card">
            <div className="Ourservices-card-image">
              <Image src={img1} alt="serivce card 3" />
            </div>
            <div className="Ourservices-card-content">
              <div className="Ourservices-card-tag">Sign</div>
              <div className="Ourservices-card-description">
                Oversized signage and advertising for maximum impact.
              </div>
              <ul>
                <li>Outdoor Identity Signage</li>
                <li>Indoor Messaging & Decor</li>
                <li>Wayfinding & ADA Signs</li>
                <li>Event and Promotional Signs</li>
                <li>Display signs & systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourservicecontainer;

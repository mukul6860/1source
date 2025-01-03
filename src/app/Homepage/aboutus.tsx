import React from "react";
import Image from "next/image";
import "./Homepage.scss";
import kgs from "../../../public/Assets/logos/kgs.jpg";
import michigan from "../../../public/Assets/logos/michigan.jpg";
import prinlogy from "../../../public/Assets/logos/printology.jpg";
import sw from "../../../public/Assets/logos/screenwork.jpg";
import signtext from "../../../public/Assets/logos/signtext.jpg";
import onesource from "../../../public/Assets/1source1.jpg";
import icon from "../../../public/Assets/rwatermark.png";

function AboutusContainer() {
  return (
    <div>
      <div className="about-container responsive">
        <div className="about-image-container">
          <video autoPlay muted loop className="heroVideo">
            <source src="/Assets/aboutvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about-content-main-container">
          <div className="about-content-container">
            <div className="about-tag">About us</div>
            <div className="underline"></div>
            <div className="about-content">
              Established in 1985, we are a distinguished Digital, Print, and
              Sign company based in Michigan, renowned for delivering
              exceptional solutions with a legacy of excellence. With six
              premier brands—Michigan Custom Signs, ScreenWorks, Printnology,
              Signtext, King Graphics System, and 1Source—we offer a
              comprehensive range of cutting-edge services, from digital
              printing to sophisticated signage and graphics. Each brand
              reflects our unwavering commitment to quality, craftsmanship, and
              innovation, allowing us to serve a diverse clientele with the
              utmost professionalism and creativity. Our enduring success is
              built on a foundation of trust, sophistication, and unparalleled
              customer satisfaction.
            </div>
          </div>
          <div className="space"></div>
          <div className="ourbrand-btn">
            <div className="ourbrand-icon">
              <Image src={icon} alt="ourbrand icon" />
            </div>
            <span>Our Brands</span>
          </div>
          <div className="about-card-container">
            <div className="about-card-wrap">
              <div className="about-card">
                <a className="about-card-image" href="https://printnology.net/">
                  <Image src={prinlogy} alt="prinlogy" />
                </a>
              </div>
              <a className="about-card">
                <div className="about-card-image">
                  <Image src={signtext} alt="signtext" />
                </div>
              </a>
              <a className="about-card" href="https://michigancustomsigns.com/">
                <div className="about-card-image">
                  <Image src={michigan} alt="michigan" />
                </div>
              </a>
              <a className="about-card" href="https://screenworks.graphics/">
                <div className="about-card-image">
                  <Image src={sw} alt="sw" />
                </div>
              </a>
              <div className="about-card">
                <div className="about-card-image">
                  <Image src={kgs} alt="kgs" />
                </div>
              </div>
              <div className="about-card">
                <div className="about-card-image">
                  <Image src={onesource} alt="onesource" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusContainer;

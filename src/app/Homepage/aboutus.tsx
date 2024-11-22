import React from "react";
import Image from "next/image";
import aboutimg from "../../../public/Assets/about.jpg";

function AboutusContainer() {
  return (
    <div>
      <div className="about-container">
        <div className="about-image-container">
          <Image src={aboutimg} alt="about image" />
        </div>
        <div className="about-content-main-container">
          <div className="about-content-container">
            <div className="about-tag">Who we are</div>
            <div className="underline"></div>
            <div className="about-content">
              Founded in 1995 It’s true, we’ve always been ambitious. We started
              as a small venture with a big idea. to revolutionize the printing
              industry! At first, our product offering was modest: we had a
              couple of printers, a screen press, and a handful of like-minded
              hard workers. But we knew, even then, that we would need to grow
              to achieve our shared vision. So we rolled our sleeves up even
              higher and we worked, driven by our passion for innovation and
              excellence.
            </div>
          </div>
          <div className="about-card-container">
            <div className="about-card-tag">More About Us</div>
            <div className="about-card-wrap">
              <div className="about-card">
                <div className="card-shadow"></div>
              </div>
              <div className="about-card">
                <div className="card-shadow"></div>
              </div>
              <div className="about-card">
                <div className="card-shadow"></div>
              </div>
              <div className="about-card">
                <div className="card-shadow"></div>
              </div>
              <div className="about-card">
                <div className="card-shadow"></div>
              </div>
              <div className="about-card">
                <div className="card-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusContainer;

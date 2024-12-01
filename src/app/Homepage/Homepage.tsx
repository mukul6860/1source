import React from "react";
import "./Homepage.scss";
import AboutusContainer from "./aboutus";
import OurworkContainer from "./ourwork";
import Ourservicecontainer from "./ourservice";
import OurbrandContainer from "./ourbrands";
import OurawardsContainer from "./ourawards";
import Serviceareas from "./Serviceareas";
import Testimonials from "./testimonials";

export default function Homepage() {
  return (
    <>
      <div className="hero-container">
        <div className="heroBanner">
          <video autoPlay muted loop className="heroVideo">
            <source src="/Assets/bgv.mp4" type="video/mp4" />
          </video>

          <div className="heroContent">
            <div className="hero-content-container">
              <h1>“Your One Source for</h1>
              <h1>Print, Sign, & Digital”</h1>
              <p>
                Your journey begins here Your journey begins here Your journey
                begins here Your journey begins here Your journey begins here
                Your journey begins here
              </p>
              <a href="#explore" className="btn">
                Explore Our Services
              </a>
            </div>
            <div className="hero-card-container">
              <div className="hero-card"></div>
              <div className="hero-card"></div>
              <div className="hero-card"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <AboutusContainer />
        <OurworkContainer />
      </div>
      <OurawardsContainer />
      <OurbrandContainer />
      <Ourservicecontainer />
      <Serviceareas />
      <Testimonials />
    </>
  );
}

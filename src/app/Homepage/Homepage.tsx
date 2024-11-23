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
              <h1>Welcome to Our Website</h1>
              <h1>Welcome to Our Website</h1>
              <p>
                Your journey begins here Your journey begins here Your journey
                begins here Your journey begins here Your journey begins here
                Your journey begins here
              </p>
              <a href="#explore" className="btn">
                Explore Now
              </a>
            </div>
            <div className="hero-card-container">
              <div className="hero-card">d</div>
              <div className="hero-card">d</div>
              <div className="hero-card">d</div>
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

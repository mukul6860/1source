import React from "react";
import { useRouter } from "next/navigation";
import "./Homepage.scss";
import AboutusContainer from "./aboutus";
import OurworkContainer from "./ourwork";
import Ourservicecontainer from "./ourservice";
import OurbrandContainer from "./ourbrands";
import OurawardsContainer from "./ourawards";
import Serviceareas from "./Serviceareas";
import Testimonials from "./testimonials";
// import CardSlider from "./CardSlider";

export default function Homepage() {
  const router = useRouter();
  return (
    <>
      <div className="hero-container">
        <div className="heroBanner">
          <video autoPlay muted loop className="heroVideo">
            <source src="/Assets/bgv.mp4" type="video/mp4" />
          </video>

          <div className="heroContent">
            <div className="hero-content-container">
              <h1>“Your one source for</h1>
              <h1>digital, print & sign ”</h1>
              <p>
                Delivering innovative solutions with unmatched quality across
                six specialized brands—providing everything you need for your
                business, from signage to printing and digital services
              </p>
              <a className="btn" onClick={() => router.push("/")}>
                Explore Our Services
              </a>
              <a className="btn" onClick={() => router.push("/getquote")}>
                Get a quote
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
        <div className="space"></div>
        <AboutusContainer />
        <Ourservicecontainer />
        <OurworkContainer />
        {/* <CardSlider /> */}
      </div>
      <OurawardsContainer />
      <OurbrandContainer />
      <Serviceareas />
      <Testimonials />
    </>
  );
}

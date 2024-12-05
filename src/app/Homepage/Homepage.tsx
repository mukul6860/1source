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
              <h1>“Your One Source for</h1>
              <h1>Print, Sign, & Digital”</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
              <a className="btn" onClick={() => router.push("/")}>
                Explore Our Services
              </a>
              <a className="btn" onClick={() => router.push("/getquote")}>
                Get Quotes
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
        {/* <CardSlider /> */}
      </div>
      <OurawardsContainer />
      <OurbrandContainer />
      <Ourservicecontainer />
      <Serviceareas />
      <Testimonials />
    </>
  );
}

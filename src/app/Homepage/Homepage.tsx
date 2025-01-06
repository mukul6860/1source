import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Homepage.scss";
import AboutusContainer from "./aboutus";
import OurworkContainer from "./ourwork";
import Ourservicecontainer from "./ourservice";
import OurbrandContainer from "./ourbrands";
import OurawardsContainer from "./ourawards";
import Serviceareas from "./Serviceareas";
import Testimonials from "./testimonials";
import installlogo from "../../../public/Assets/watermark.png";
// import CardSlider from "./CardSlider";

function FaDraftingCompass() {
  return (
    <svg
      stroke="white"
      fill="white"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
    >
      <path d="M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19 53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25-54.98-95.23zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47 15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04 70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14zM256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32z" />
    </svg>
  );
}

function GrServices() {
  return (
    <svg
      stroke="white"
      fill="white"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path
        fill="none"
        stroke="white"
        strokeWidth={2}
        d="M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22"
      />
    </svg>
  );
}

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
              {/* <a className="btn" onClick={() => router.push("/")}>
                Explore Our Services
              </a> */}
              <a className="btn" onClick={() => router.push("/getquote")}>
                Get a quote
              </a>
            </div>
            <div className="hero-card-container">
              <div className="hero-card">
                <div className="hero-card-image">
                  <FaDraftingCompass />
                </div>
                <div className="hero-card-tag">Design</div>
                <div className="hero-card-content">
                  We create custom signage that grabs attention and highlights
                  your brand.
                </div>
              </div>
              <div className="hero-card gray">
                <div className="hero-card-image">
                  <GrServices />
                </div>
                <div className="hero-card-tag">Manufacture</div>
                <div className="hero-card-content">
                  Custom sign board installation showcases your branding for
                  optimal visibility.
                </div>
              </div>
              <div className="hero-card">
                <div className="hero-card-image">
                  <Image src={installlogo} alt="installlogo" />
                </div>
                <div className="hero-card-tag">Install</div>
                <div className="hero-card-content">
                  Custom sign board installation showcases your branding for
                  optimal visibility.
                </div>
              </div>
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

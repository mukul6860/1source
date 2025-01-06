"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import productimage from "../../../public/Assets/download.jpg";

function BiChevronDown() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      aria-label="Chevron Down Icon"
    >
      <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
    </svg>
  );
}

function IoMdCall() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      aria-label="Phone Icon"
    >
      <path d="M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z" />
    </svg>
  );
}

function GrMail() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      aria-label="Mail Icon"
    >
      <path
        fillRule="evenodd"
        d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
      />
    </svg>
  );
}
export default function page() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSeriviceDropdownOpen, setIsSeriviceDropdownOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const ProjectDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const servicetDropdown = () => {
    setIsSeriviceDropdownOpen(!isSeriviceDropdownOpen);
  };

  return (
    <>
      <div style={{ position: "relative", overflow: "auto", height: "100vh" }}>
        <div className="header-content-container">
          <div className="content-container">
            <IoMdCall />
            248-735-9999
          </div>
          <div className="content-container border-right-left">
            <GrMail />
            info@the1source.com
          </div>
          <div className="content-container none">
            26600 Heyn Dr, Novi, MI 48374
          </div>
        </div>
        <div className="header-container">
          <div className="nav-container">
            <div className="nav-logo">
              <a onClick={() => router.push("/")}>
                <Image src={logo1} alt="Company Logo" />
              </a>
            </div>
            <div
              id="nav-icon4"
              className={isOpen ? "open" : ""}
              onClick={toggleClass}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`nav-menu-container ${isOpen ? "open-nav" : ""}`}>
              <a
                href="https://spaces.hightail.com/uplink/1source"
                className="nav-menu btn"
              >
                Upload center
              </a>

              <div className="dropdown">
                <div className="nav-menu dropdown" onClick={servicetDropdown}>
                  Our services
                  <BiChevronDown />
                </div>
                <div
                  className={`dropdown-content ${
                    isSeriviceDropdownOpen ? "open" : ""
                  }`}
                >
                  <a
                    className="btn"
                    onClick={() => router.push("/digitalmarketing")}
                  >
                    Digital marketing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/commercialprinting")}
                  >
                    Commercial printing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/largeformat")}
                  >
                    Large format printing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/Interiorsign")}
                  >
                    Interior signs
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/exteriorsign")}
                  >
                    Exterior signs
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/permitandinstallation")}
                  >
                    Permit & installation
                  </a>
                  <a className="btn" onClick={() => router.push("/customsign")}>
                    Custom environments
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/undercunstruction")}
                  >
                    1Code experience
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/undercunstruction")}
                  >
                    Matterport virtual experiences
                  </a>
                </div>
              </div>

              <div className="dropdown btn">
                <div className="nav-menu dropdown" onClick={ProjectDropdown}>
                  Projects
                  <BiChevronDown />
                </div>
                <div
                  className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}
                >
                  <a className="btn" onClick={() => router.push("/portfolio")}>
                    Our portfolio
                  </a>
                  <a className="btn" onClick={() => router.push("/map")}>
                    Map
                  </a>
                </div>
              </div>
              <div
                className="nav-menu btn"
                onClick={() => router.push("/blogs")}
              >
                Insights & resources
              </div>
              <a
                className="nav-btn btn"
                onClick={() => router.push("/getquote")}
              >
                Request quote
              </a>
            </div>
          </div>
        </div>
        <div className="product-banner-container">
          <div className="product-banner-content-container">
            <div className="product-banner-tag">
              Transform Spaces with 3D Virtual Tours
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              Welcome to a new era of immersive experiences with our
              <b> Matterport Virtual Tours </b> and
              <b> 3D Virtual Experience Services,</b> designed to redefine how
              you present your spaces. At1Source, we specialize in creating
              interactive and engaging virtual tours for real estate, retail,
              and commercial spaces. With cutting-edge technology, we bring your
              properties to life, offering clients an innovative way to explore
              and engage with your environment.
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Matterport Virtual Tours: Redefining Engagement
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Our <b> Matterport Virtual Experiences in Michigan</b> use
                  advanced 3D technology to capture spaces with stunning clarity
                  and precision. With Matterport, you can give your audience a
                  fully interactive, 360-degree walkthrough of your property,
                  enhancing visibility and boosting interest.
                  <ul>
                    <li>
                      <b> Realistic Detailing</b>: High-resolution visuals and
                      dynamic rendering ensure every corner is vividly captured.
                    </li>
                    <li>
                      <b>User-Friendly Navigation</b>: Viewers can easily
                      navigate through spaces using simple, intuitive controls.
                    </li>
                    <li>
                      <b>Versatile Applications</b>: Ideal for real estate
                      listings, retail environments, commercial spaces, and
                      more.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Real Estate Virtual Tours: Attract More Buyers
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  In today’s competitive real estate market, standing out is
                  essential. Our<b> real estate virtual tours</b> allow
                  potential buyers to experience properties remotely, saving
                  time while generating genuine interest.
                  <ul>
                    <li>
                      <b> Highlight Features</b>: Showcase floor plans, layouts,
                      and key amenities.
                    </li>
                    <li>
                      <b>Expand Your Reach</b>: Attract out-of-town buyers or
                      clients unable to visit in person.
                    </li>
                    <li>
                      <b> Boost Engagement</b>: Provide a deeper connection to
                      the property, encouraging faster decisions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Retail and Commercial Virtual Tours: Elevate Your Space
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  For retail and commercial spaces, our
                  <b> 3D virtual tours in Novi, MI,</b> help you showcase your
                  environment like never before. From product displays to layout
                  designs, virtualtours are an innovative way to captivate your
                  audience.
                  <ul>
                    <li>
                      <b> Retail Stores</b>: Highlight product arrangements and
                      ambiance to entice shoppers.
                    </li>
                    <li>
                      <b>Commercial Facilities</b>: Showcase office layouts,
                      warehouses, or event venues to potential clients or
                      partners.
                    </li>
                    <li>
                      <b>Custom Branding</b>: Tailor tours with your logo and
                      unique branding elements to create a memorable experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Why Choose1Source for 3D Virtual Tours?
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  <ul>
                    <li>
                      <b>State-of-the-Art Technology</b>: Our
                      <b> Matterport Virtual Tours</b> ensure flawless capture
                      and presentation.
                    </li>
                    <li>
                      <b>Local Expertise</b>: With a strong presence in
                      Michigan, we understand your business needs.
                    </li>
                    <li>
                      <b> Tailored Solutions</b>: Each tour is customized to
                      meet the goals of your space and audience.
                    </li>
                    <li>
                      <b> Comprehensive Services</b>: From planning to delivery,
                      we handle every step of the process with precision and
                      care.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Explore the Future of Virtual Engagement
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Whether you’re looking to sell a home, attract tenants to a
                  commercial property, or showcase a retail space, our
                  <b> 3D Virtual Experience Services</b> are designed to elevate
                  your offerings. At1Source, we’re committed to helping
                  businesses in Novi and beyond leverage technology to captivate
                  their audiences and achieve their goals.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            Ready to transform how you present your spaces? Contact us today to
            create a virtual tour that leaves a lasting impression!
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

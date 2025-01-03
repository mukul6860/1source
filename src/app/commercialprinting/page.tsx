"use client";
import React, { useState } from "react";
import Footer from "../footer/footer";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import commercial1 from "../../../public/Assets/ourservice/commercial/Brochure and Flyer Printing.png";
import commercial2 from "../../../public/Assets/ourservice/commercial/Business Card Printing Services.png";
import commercial3 from "../../../public/Assets/ourservice/commercial/Offset and Digital Printing Solutions.png";
import commercial4 from "../../../public/Assets/ourservice/commercial/Custom Printing Materials for Every Need.png";
import commercial5 from "../../../public/Assets/ourservice/commercial/Why Choose The1Source for Your Signage Needs.png";

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
              <div
                className="nav-menu btn"
                onClick={() => router.push("/1codeexperiance")}
              >
                Upload center
              </div>

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
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    1Code experience
                  </a>
                  <a className="btn" onClick={() => router.push("/matterport")}>
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
              Commercial Printing Services in Michigan: Your Trusted Partner for
              Quality and Efficiency
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              The1Source – Your Printing Partner for Quality Printed Materials
              At The1Source, we believe that high-quality printed materials
              leave a lasting impression. From advertising your business to
              attracting prospective customers to advertising your solutions,
              our business printing services are specifically designed to help
              you with your needs. As a top provider of printing services in
              Michigan, our services encompass all aspects of creative printing
              ranging from UV printing, high volume printing, large format,
              event and wedding printing, and many more.
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={commercial1} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Brochure and Flyer Printing: Inform and Impress
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Capture attention with professionally designed brochures and
                  flyers. Whether you need vibrant marketing materials or
                  detailed product guides, our brochure and flyer printing
                  services ensure every piece communicates your brand message
                  effectively. From sleek, modern designs to classic formats, we
                  cater to various styles, helping you make an impact on your
                  audience.
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
                  <Image src={commercial2} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Business Card Printing Services: Stand Out from the Crowd
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Your business card is often your first introduction, and we
                  ensure it leaves a lasting impression. Our business card
                  printing services offer a variety of premium options,
                  including custom finishes, embossing, and foil stamping, to
                  make your cards as unique as your business. We make business
                  strategies easy with a variety of templates, low cost, and
                  quick turnaround in a stiff competition Muslim networking
                  style.
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
                  <Image src={commercial3} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Offset and Digital Printing Solutions: Precision Meets
                  Flexibility
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  From large-scale offset printing for bulk orders to digital
                  printing for smaller, customizable runs, we offer tailored
                  offset and digital printing solutions that prioritize both
                  quality and efficiency. Our advanced technology ensures sharp,
                  vibrant colors and durable finishes, making your printed
                  materials stand out in every setting.
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
                  <Image src={commercial4} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Printing Materials for Every Need
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  At The1Source, we specialize in creating personalized
                  solutions for businesses. Whether you need postcards,
                  catalogs, posters, or any other printed collateral, our
                  commercial printing services in Michigan are designed to meet
                  your exact specifications. We collaborate with you throughout
                  the process, ensuring every detail—from paper type to color
                  scheme—is aligned with your brand identity.
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
                  <Image src={commercial5} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Why Choose The1Source?</div>
                <div className="underline"></div>
                <div className="product-content">
                  1.Fast Turnaround: We understand tight deadlines and deliver
                  high-quality results quickly. <br /> 2.Cost-Effective
                  Solutions: Our competitive pricing ensures you get premium
                  printing services without breaking the bank. <br /> 3.Local
                  Expertise: As a trusted provider of business printing
                  solutions in Novi, MI, we bring years of experience to every
                  project.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            Elevate your brand with professional printing services tailored to
            your business needs. Contact The1Source today to learn how we can
            bring your vision to life with our custom printing solutions!
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import dimage from "../../../public/Assets/about.png";

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
                    onClick={() => router.push("/digital-marketing")}
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
                  {/* <a
                    className="btn"
                    onClick={() => router.push("/undercunstruction")}
                  >
                    1Code experience
                  </a> */}
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
        <div className="ourhistory-banner-container">
          <div className="ourhistory-banner-content-container">
            <div className="ourhistory-banner-tag">Who We Are</div>
            <div className="underline"></div>
            <div className="ourhistory-banner-description">
              At 1Source, creativity and innovation come together to transform
              into something tangible for each idea. Quality of work and
              determination in every project we take is a signature of 1 Source.
              It elevates them beyond the range of just signs, prints, or
              digital solutions. We create experiences, not just brand them.
            </div>
          </div>
        </div>
        <div className="ourhistory-main-container">
          <div className="ourhistory-content-container">
            <div className="ourhistory-tag">Our Beginnings</div>
            <div className="underline"></div>
            <div className="ourhistory-content">
              Founded in 1995, 1Source began as a small but ambitious team
              determined to redefine the printing industry. Armed with a handful
              of machines, a few bold ideas, and an unshakable work ethic, we
              set out on a mission to deliver excellence. What started with a
              modest lineup of printing services has since grown into a legacy
              of innovation and success, thanks to the unwavering dedication of
              our team.
            </div>
            <div className="ourhistory-tag">Expanding Horizons</div>
            <div className="underline"></div>
            <div className="ourhistory-content">
              Our journey has been defined by growth and adaptation. As demand
              for our services grew, so did our offerings. Through long nights,
              countless brainstorming sessions, and a relentless drive to excel,
              we expanded beyond traditional printing. Partnering with other
              companies allowed us to diversify, and by 2010, we embraced the
              digital revolution. Adding digital marketing and large-format
              digital printing to our repertoire was a game-changing decision,
              enabling us to cater to an even broader clientele and their
              evolving needs.
            </div>
            <div className="ourhistory-tag">Leaders in the Industry</div>
            <div className="underline"></div>
            <div className="ourhistory-content">
              Today, 1Source stands as a trusted leader in the world of print,
              signage, and digital solutions. Our expertise spans a wide array
              of industries, and our dedication to innovation ensures we stay
              ahead of the curve. We continually invest in cutting-edge
              technology and refine our processes to deliver exceptional
              results. From custom signage to digital campaigns, we pride
              ourselves on providing solutions that resonate with our clients
              and their audiences.
            </div>
            <div className="ourhistory-tag">Awards and Recognition</div>
            <div className="underline"></div>
            <div className="ourhistory-content">
              Our commitment to excellence has not gone unnoticed. Over the
              years, 1Source has earned numerous accolades for our work,
              including:
              <ul>
                <li>
                  <b> Gold Award </b> for Large Format Printing
                </li>
                <li>
                  <b> Silver Award </b> for ADA Signage
                </li>
                <li>
                  <b> Silver Award </b> for Digital Printing
                </li>
                <li>
                  <b> Bronze Award </b> for Printer’s Self-Advertising
                </li>
                These awards are a testament to the hard work, creativity, and
                dedication of our talented team.
              </ul>
            </div>
            <div className="ourhistory-tag">Why 1Source?</div>
            <div className="underline"></div>
            <div className="ourhistory-content">
              At 1Source, we don’t just fulfill orders—we build partnerships.
              Our team collaborates closely with every client to ensure their
              vision comes to life with precision and artistry. Whether it’s
              creating eye-catching signage, developing a digital marketing
              campaign, or delivering large-format printing solutions, we strive
              to exceed expectations every step of the way. <br />
              Join us on our journey to create, innovate, and inspire. At
              1Source, your vision is our mission.
            </div>
          </div>
          <div className="ourhistory-image-container">
            <div className="image-wraper">
              <Image src={dimage} alt="ourhistory content image" />
            </div>
          </div>
        </div>
        <div className="space"></div>
        <Footer />
      </div>
    </>
  );
}

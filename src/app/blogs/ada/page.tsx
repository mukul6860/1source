"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import "../../Homepage/Homepage.scss";
import Footer from "../../footer/footer";
import ada1 from "../../../../public/Assets/Blogs/key1.png";
import ada2 from "../../../../public/Assets/Blogs/key2.png";
import Link from "next/link";

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

function AiOutlineArrowLeft() {
  return (
    <svg
      stroke="white "
      fill="white "
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
    >
      <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}

function page() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    console.log("inside handleScroll 1window.scrollY", window.scrollY);
    if (window.scrollY > 60) {
      console.log("inside handleScroll 2window.scrollY", window.scrollY);
      setScrolled(true);
    } else {
      console.log("inside handleScroll 3window.scrollY", window.scrollY);
      setScrolled(false);
    }
  };

  useEffect(() => {
    console.log("inside useEffect");
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
        <Link className="back-blog-btn-container" href="/blogs">
          <div className="back-blog-btn">
            <AiOutlineArrowLeft />
          </div>
          <div className="back-blog-text">Back</div>
        </Link>
        <div className="project-details-container">
          <div className="project-details-wraper">
            <div className="heading">
              Key Considerations for ADA Exit Sign Installation
            </div>
            <div className="project-content">
              When it comes to building safety, one of the most important
              considerations is ensuring that all occupants can safely and
              easily exit the building in case of an emergency. This is
              especially crucial for individuals with disabilities, who may
              require specific accommodations to navigate the building and find
              the nearest exit. In order to meet the requirements of the
              Americans with Disabilities Act (ADA), it is important to
              carefully consider the installation of ADA exit signs. Here are
              some key considerations to keep in mind.
            </div>
            <div className="subheading">Understanding ADA Requirements</div>
            <div className="project-image-container">
              <Image src={ada2} alt="" />
              <div className="image-license-tag">
                by Lesly Juarez (https://unsplash.com/@jblesly)
              </div>
            </div>
            <div className="project-content">
              The ADA sets specific guidelines for the installation of exit
              signs in order to ensure that individuals with disabilities can
              easily locate and navigate to the nearest exit. These guidelines
              include the size, color, and placement of the signs, as well as
              the use of tactile characters and braille. It is important to
              thoroughly understand these requirements in order to ensure
              compliance and the safety of all building occupants.
            </div>
            <div className="subheading">Choosing the Right Signage</div>
            <div className="project-content">
              When selecting ADA exit signs, it is important to choose signs
              that meet the specific requirements set by the ADA. This includes
              using a specific color scheme (green with white lettering), using
              tactile characters and braille, and ensuring that the sign is
              mounted at the correct height and location. It is also important
              to choose signs that are durable and long-lasting, as they will
              need to withstand regular wear and tear.
            </div>
            <div className="subheading">Placement of Signs</div>
            <div className="project-content">
              In addition to the specific requirements for the signs themselves,
              it is important to carefully consider the placement of the signs
              throughout the building. The ADA requires that exit signs be
              placed at all exits, including stairwells, elevators, and ramps.
              Signs should also be placed at all intersections and changes in
              direction, as well as at any areas where the path to the exit may
              not be immediately obvious. It is important to ensure that the
              signs are easily visible and not obstructed by any objects.
            </div>
            <div className="subheading">Regular Maintenance</div>
            <div className="project-image-container">
              <Image src={ada1} alt="" />
              <div className="image-license-tag">
                by Yoel Winkler (https://unsplash.com/@yoel100)
              </div>
            </div>
            <div className="project-content">
              Once ADA exit signs are installed, it is important to regularly
              maintain and inspect them to ensure they remain compliant and in
              good working condition. This includes checking for any damage or
              wear and tear, as well as ensuring that the signs are still easily
              visible and legible. Any necessary repairs or replacements should
              be made promptly to ensure the safety of all building occupants.
            </div>
            <div className="subheading">Consider Hiring a Professional</div>
            <div className="project-content">
              While it may be tempting to install ADA exit signs yourself, it is
              highly recommended to hire a professional to ensure compliance and
              proper installation. A professional will have a thorough
              understanding of the ADA requirements and can ensure that all
              signs are installed correctly and in the appropriate locations.
              <br /> By carefully considering these key factors, you can ensure
              that your building is equipped with ADA compliant exit signs that
              will help all occupants safely navigate to the nearest exit in
              case of an emergency. Remember to regularly inspect and maintain
              the signs to ensure their effectiveness and compliance.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;

"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import permiit1 from "../../../public/Assets/ourservice/permiit/Navigating the Signage Permit Process.png";
import permiit2 from "../../../public/Assets/ourservice/permiit/Ensuring Compliance for Long-Term Success.png";
import permiit3 from "../../../public/Assets/ourservice/permiit/Professional Sign Installation You Can Trust.png";
import permiit4 from "../../../public/Assets/ourservice/permiit/Comprehensive Signage Solutions in Michigan.png";
import permiit5 from "../../../public/Assets/ourservice/permiit/Why Choose The1Source for Your Signage Needs.png";

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
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    1Code experience
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
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
              Professional Sign Installation and Permit Services in Michigan
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              End-to-end Signage Permit Services & Professional Sign
              Installation in Michigan and Novi by The1Source Whether it’s
              dealing with complex permit processes or ensuring proper
              installation, we take care of every detail in the process of
              realising your signage vision. Staying within the local
              guidelines, we ensure your signs are not only eye-catching, but
              also delivered safely and securely to your business.
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={permiit1} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Navigating the Signage Permit Process
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Obtaining the necessary permits for signage can be a
                  challenging and time-consuming task. That’s where we come in.
                  Our <b> signage permit services </b> include:
                  <ul>
                    <li>
                      <b> Permit Application Assistance</b> : We gather all
                      required documentation, including site plans, design
                      specifications, and zoning details, to streamline the
                      application process.
                    </li>
                    <li>
                      <b> Compliance with Local Regulations </b>: Every city and
                      county has specific guidelines for signage, and we ensure
                      your signage meets all criteria to avoid costly delays or
                      fines.
                    </li>
                    <li>
                      <b>Timely Approvals </b>: Our team’s experience with local
                      authorities helps expedite the approval process, ensuring
                      your project stays on schedule.
                    </li>
                  </ul>
                  With <b> The1Source,</b> you can focus on your business while
                  we take care of the paperwork and compliance.
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
                  <Image src={permiit2} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Ensuring Compliance for Long-Term Success
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Signage compliance is more than just obtaining permits—it’s
                  about ensuring your signage meets safety and durability
                  standards for long-term use. Our team meticulously reviews
                  every aspect of your signage, including materials, placement,
                  and visibility, to ensure compliance with:
                  <ul>
                    <li>Local zoning laws</li>
                    <li>Building codes</li>
                    <li>ADA (Americans with Disabilities Act) requirements</li>
                    <li>Environmental regulations</li>
                  </ul>
                  We stay updated with the latest rules and standards, giving
                  you peace of mind that your signage will not only look great
                  but also stand the test of time.
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
                  <Image src={permiit3} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Professional Sign Installation You Can Trust
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  A great sign deserves a flawless installation. At The1Source,
                  our professional sign installation services ensure your
                  signage is installed securely and positioned for maximum
                  impact. Our team of skilled technicians uses advanced tools
                  and techniques to handle everything from small indoor signs to
                  large outdoor displays. <br /> Key features of our
                  installation services include:
                  <ul>
                    <li>
                      <b> Site Assessment </b>: We evaluate your location to
                      determine the best placement for visibility and
                      durability.
                    </li>
                    <li>
                      <b> Secure Mounting </b>: From wall-mounted signs to
                      freestanding structures, we use high-quality materials and
                      hardware to ensure your signage withstands environmental
                      elements.
                    </li>
                    <li>
                      <b> Electrical Sign Installation </b>: For illuminated
                      signs, our experts handle electrical connections safely
                      and efficiently.
                    </li>
                    <li>
                      <b> Post-Installation Inspection </b>: After installation,
                      we conduct thorough inspections to ensure everything meets
                      quality and safety standards.
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
                  <Image src={permiit4} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Comprehensive Signage Solutions in Michigan
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  At <b> The1Source,</b> we’re proud to be a trusted provider of
                  <b> signage permits and installation in Michigan.</b> Whether
                  you’re opening a new business, updating your brand, or
                  expanding your operations, we offer customized solutions
                  tailored to your needs. Businesses in <br /> Novi, MI, and
                  surrounding areas rely on us for:
                  <ul>
                    <li>
                      <b> Signage Design and Fabrication </b>
                    </li>
                    <li>
                      <b> Permit Acquisition and Compliance </b>
                    </li>
                    <li>
                      <b> Professional Installation and Maintenance </b>
                    </li>
                  </ul>
                  We prioritize quality, compliance, and customer satisfaction
                  in every project, ensuring your signage serves as a powerful
                  marketing tool for years to come.
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
                  <Image src={permiit5} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Why Choose The1Source for Your Signage Needs?
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  <ul>
                    <li>
                      <b> Local Expertise </b>: We understand the specific
                      regulations and requirements for signage in Michigan.
                    </li>
                    <li>
                      <b> End-to-End Services </b>: From permits to
                      installation, we manage the entire process, saving you
                      time and effort.
                    </li>
                    <li>
                      <b> Attention to Detail </b>: Every project is handled
                      with precision, ensuring your signage reflects your
                      brand’s professionalism and vision.
                    </li>
                    <li>
                      <b> Timely Delivery </b>: We work efficiently to meet
                      deadlines without compromising on quality.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            Get started with <b> The1Source </b> today! Contact us for reliable
            <b> signage permits and installation in Michigan,</b> and let us
            help your business make a bold statement with professional,
            compliant, and expertly installed signage.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import exteriorsigns1 from "../../../public/Assets/ourservice/exteriorsigns/Channel Letter Signs Illuminated Signage Solutions.png";
import exteriorsigns2 from "../../../public/Assets/ourservice/exteriorsigns/Door Signs Welcoming and Informative.png";
import exteriorsigns3 from "../../../public/Assets/ourservice/exteriorsigns/Hanging Signs Functional and Eye Catching.png";
import exteriorsigns4 from "../../../public/Assets/ourservice/exteriorsigns/Metal Signs Durable and Sophisticated.png";
import exteriorsigns5 from "../../../public/Assets/ourservice/exteriorsigns/Monument and Pylon Signs Make a Bold Statement.png";
import exteriorsigns6 from "../../../public/Assets/ourservice/exteriorsigns/Window Graphics Turn Glass into Opportunit.png";
import exteriorsigns7 from "../../../public/Assets/ourservice/exteriorsigns/Parking Signs Clear and Convenient Navigation.png";
import exteriorsigns8 from "../../../public/Assets/ourservice/exteriorsigns/Real Estate Signs Professional and Persuasive.png";
import exteriorsigns9 from "../../../public/Assets/ourservice/exteriorsigns/School and Institutional Signs Inspire and Inform.png";
import exteriorsigns10 from "../../../public/Assets/ourservice/exteriorsigns/Golf Tournament and Event Signs Showcase Your Brand.png";
import exteriorsigns11 from "../../../public/Assets/ourservice/exteriorsigns/Why Choose The1Source for Your Exterior Signage in Michigan.png";

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
              Custom Exterior Signs Tailored to Your Business
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              Exterior signage is more than just a marker for your business;
              it’s a powerful communication tool that conveys your brand
              identity, attracts customers, and enhances visibility. At 1Source,
              we specialize in crafting
              <b> Custom Exterior Signs </b> that stand out while reflecting the
              essence of your brand. From bold designs to durable materials, our
              solutions are tailored to meet the unique needs of businesses
              across Michigan.
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={exteriorsigns1} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Channel Letter Signs: Illuminated Signage Solutions
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Make your business impossible to miss with our striking
                  <b> channel letter signs</b>. These three-dimensional,
                  illuminated letters are perfect for enhancing visibility day
                  and night. Whether mounted directly to your building or placed
                  on a raceway for added versatility, channel letters are a
                  timeless option for showcasing your brand in a polished,
                  professional manner. Our
                  <b> Illuminated Signage Solutions </b> ensure your business
                  shines brightly, even after dark.
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
                  <Image src={exteriorsigns2} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Door Signs: Welcoming and Informative
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Your business entrance is your first impression. With custom
                  <b> door signs,</b> you can provide essential information,
                  enhance branding, and guide visitors effortlessly. Whether you
                  need directional signs, business hours, or logo displays, our
                  door signage solutions combine style and function to leave a
                  lasting impact.
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
                  <Image src={exteriorsigns3} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Hanging Signs: Functional and Eye-Catching
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Perfect for businesses looking to maximize visibility in
                  crowded areas, <b> hanging signs </b> add a classic touch to
                  your exterior design. Whether suspended indoors or outdoors,
                  these signs are highly versatile and can be customized in
                  various materials, shapes, and finishes to match your brand
                  aesthetics.
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
                  <Image src={exteriorsigns4} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Metal Signs: Durable and Sophisticated
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  For a sleek, long-lasting option, <b> metal signs </b> are the
                  perfect choice. Known for their durability and elegant
                  appearance, metal signs are ideal for showcasing your business
                  name, logo, or key information. With options ranging from
                  brushed aluminum to weatherproof steel, we deliver signage
                  that’s as resilient as it is visually appealing.
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
                  <Image src={exteriorsigns5} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Monument and Pylon Signs: Make a Bold Statement
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Nothing captures attention like a well-crafted
                  <b> monument sign </b>
                  or a towering <b> pylon sign.</b> Perfect for making a
                  statement at entrances, these ground-level or elevated signs
                  are designed to impress. Whether you opt for classic stone,
                  modern acrylic, or a combination of materials, these signs
                  ensure visibility and communicate sophistication. With
                  <b> Monument and Pylon Signs,</b> your business will leave a
                  lasting impression.
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
                  <Image src={exteriorsigns6} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Window Graphics: Turn Glass into Opportunity
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Transform your storefront into a marketing canvas with vibrant
                  <b> window graphics.</b> Whether you want to showcase
                  promotions, add privacy, or reinforce your brand, our custom
                  graphics are designed to make an impact. Choose from
                  full-coverage wraps, decals, or perforated vinyl for a look
                  that’s both functional and stylish.
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
                  <Image src={exteriorsigns7} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Parking Signs: Clear and Convenient Navigation
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Ensure a seamless experience for your customers with clear and
                  professional <b>parking signs.</b> From reserved spaces to
                  directional signs, we offer a variety of designs that improve
                  functionality and reflect your business’s commitment to
                  customer care.
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
                  <Image src={exteriorsigns8} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Real Estate Signs: Professional and Persuasive
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Capture attention in competitive markets with expertly
                  designed <b> real estate signs.</b> Whether it’s “For Sale,”
                  “Open House,” or custom branding, we create durable and
                  attractive signs that help properties stand out and generate
                  leads.
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
                  <Image src={exteriorsigns9} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  School and Institutional Signs: Inspire and Inform
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Educational institutions need signage that informs while
                  enhancing the campus atmosphere. From entryway signs to
                  digital displays, we design custom <b> school signs</b> that
                  reflect pride and professionalism while serving functional
                  purposes.
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
                  <Image src={exteriorsigns10} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Golf Tournament and Event Signs: Showcase Your Brand
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Planning a golf tournament or a corporate event? Our custom
                  <b> event signs </b> add a professional touch to your branding
                  efforts. From sponsor banners to directional signage, we
                  ensure your event is visually cohesive and memorable.
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
                  <Image src={exteriorsigns11} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Why Choose1Source for Your Exterior Signage in Michigan?
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  At1Source, we understand that your signage is a reflection of
                  your brand. That’s why we use premium materials, cutting-edge
                  design techniques, and expert craftsmanship to deliver signage
                  that exceeds expectations. Whether you’re a small business or
                  a large corporation, we have the expertise to bring your
                  vision to life.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            Contact us today to discover how our
            <b> Outdoor Sign Solutions in Novi, MI,</b> and beyond, can elevate
            your business. Let’s create something remarkable together with our
            custom <b>Exterior Signage in Michigan!</b>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

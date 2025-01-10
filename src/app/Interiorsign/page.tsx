"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import interiorsigns1 from "../../../public/Assets/ourservice/interiorsigns/Acrylic Signs.png";
import interiorsigns2 from "../../../public/Assets/ourservice/interiorsigns/ADA-Compliant Signage.png";
import interiorsigns3 from "../../../public/Assets/ourservice/interiorsigns/Wayfinding Signage Solutions.png";
import interiorsigns4 from "../../../public/Assets/ourservice/interiorsigns/Lobby Signs.png";
import interiorsigns5 from "../../../public/Assets/ourservice/interiorsigns/Mission Statement.png";
import interiorsigns6 from "../../../public/Assets/ourservice/interiorsigns/Vinyl Signs and Wall Graphics.png";
import interiorsigns7 from "../../../public/Assets/ourservice/interiorsigns/Wall Decals.png";
import interiorsigns8 from "../../../public/Assets/ourservice/interiorsigns/Wall Murals.png";
import interiorsigns9 from "../../../public/Assets/ourservice/interiorsigns/Wall Wraps.png";
import interiorsigns10 from "../../../public/Assets/ourservice/interiorsigns/Elevate Your Space with The1Source.png";

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
        <div className="product-banner-container">
          <div className="product-banner-content-container">
            <div className="product-banner-tag">
              Custom Interior Signs Tailored for Your Space
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              Interior signs play a vital role in shaping the ambiance and
              functionality of your workspace. Whether you're aiming to impress
              visitors, guide clients effortlessly, or boost employee morale,
              the right signage makes all the difference. At1Source, we
              specialize in creating <b> Custom Interior Signs</b> that are as
              unique as your business. From sleek designs to versatile
              materials, we ensure that every sign reflects your brand’s
              identity and meets your specific needs.
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={interiorsigns1} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Acrylic Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Acrylic signs offer the perfect blend of style and durability,
                  making them a versatile choice for any professional setting.
                  Choose crystal-clear acrylic for a classic, polished look,
                  frosted acrylic for a subtle, elegant touch, or vibrant colors
                  to infuse a modern aesthetic. Acrylic is not only
                  shatter-proof but also significantly stronger than glass.
                  Enhance your signage with features like etching, beveled
                  edges, or standoff mounts for a sleek, three-dimensional
                  appearance.
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
                  <Image src={interiorsigns2} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">ADA-Compliant Signage</div>
                <div className="underline"></div>
                <div className="product-content">
                  Accessibility and compliance go hand in hand with great
                  design.<b> ADA-compliant signage</b> ensures inclusivity while
                  reflecting your brand's professionalism. Our expertise in ADA
                  compliance allows us to create signs that meet all legal
                  requirements while maintaining a cohesive look with your
                  existing décor. From tactile lettering to braille, we combine
                  functionality with aesthetics to secure your Certificate of
                  Occupancy in style.
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
                  <Image src={interiorsigns3} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Wayfinding Signage Solutions</div>
                <div className="underline"></div>
                <div className="product-content">
                  Guide your visitors with ease and precision.
                  <b> Wayfinding signage solutions </b> are essential for
                  creating a seamless experience, helping clients and customers
                  navigate your space effortlessly. Whether it’s a large campus
                  or a compact office, our custom-designed signs ensure clarity
                  and efficiency, leaving a lasting positive impression.
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
                  <Image src={interiorsigns4} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Lobby Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Your lobby sets the tone for your brand. From the moment
                  someone steps off the elevator, a well-designed lobby sign can
                  instill trust and confidence in your business. Don’t let
                  poorly crafted signage detract from your company’s image.
                  Instead, invest in premium, visually striking lobby signs that
                  elevate your brand’s reputation and make a memorable first
                  impression.
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
                  <Image src={interiorsigns5} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Mission Statement</div>
                <div className="underline"></div>
                <div className="product-content">
                  Showcase your organization’s core values with a beautifully
                  designed mission statement wall. A visually engaging mission
                  statement not only communicates your goals to clients but also
                  inspires employees by reinforcing the purpose of their work.
                  We can help you create a design that’s both impactful and
                  visually cohesive with your workspace.
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
                  <Image src={interiorsigns6} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Vinyl Signs and Wall Graphics</div>
                <div className="underline"></div>
                <div className="product-content">
                  Versatile and cost-effective, vinyl signs are perfect for a
                  wide range of applications, indoors or outdoors. Whether you
                  need custom graphics for windows, walls, or vehicles, vinyl
                  signs can be tailored to meet your unique requirements. With
                  endless design possibilities, our
                  <b> wall graphics and decor</b>
                  solutions help businesses make a bold statement and stand out
                  from the competition.
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
                  <Image src={interiorsigns7} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Wall Decals</div>
                <div className="underline"></div>
                <div className="product-content">
                  Transform your space with custom wall decals. From office
                  interiors to retail stores, wall decals offer an easy and
                  stylish way to personalize your environment. Popular for
                  adding privacy to glass conference rooms or creating branded
                  designs, these decals are a modern and adaptable solution for
                  businesses looking to make an impact.
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
                  <Image src={interiorsigns8} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Wall Murals</div>
                <div className="underline"></div>
                <div className="product-content">
                  Dull walls can drain the energy of a space. Revitalize your
                  office or commercial area with vibrant wall murals. Custom
                  murals bring life and personality to any setting, transforming
                  ordinary walls into engaging marketing tools or artful
                  expressions of your brand’s identity. Let your walls tell a
                  story that captivates and inspires.
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
                  <Image src={interiorsigns9} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Wall Wraps</div>
                <div className="underline"></div>
                <div className="product-content">
                  Turn any wall into a stunning visual masterpiece with custom
                  wall wraps. Perfect for offices, retail spaces, or homes, wall
                  wraps offer endless branding opportunities while adding a
                  modern, stylish touch. Affordable, customizable, and easy to
                  install, they’re an ideal solution for anyone looking to
                  elevate their interior design while making a bold statement.
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
                  <Image src={interiorsigns10} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Elevate Your Space with 1Source
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  At1Source, we’re committed to helping businesses in Michigan
                  stand out with innovative and impactful interior signage.
                  Whether you’re revamping an office, outfitting a retail space,
                  or creating a welcoming environment for clients and employees,
                  our custom solutions ensure your space leaves a lasting
                  impression.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            Contact us today to explore the best <b> Interior Signage</b> in
            Michigan, including<b> Custom Interior Signs in Novi, MI,</b> and
            discover how we can bring your vision to life.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

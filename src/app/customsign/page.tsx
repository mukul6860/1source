"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import custom1 from "../../../public/Assets/ourservice/custom/Custom Banners Your Message, Loud and Clear.png";
import custom2 from "../../../public/Assets/ourservice/custom/Acrylic Sneeze Guards Safety Meets Style.png";
import custom3 from "../../../public/Assets/ourservice/custom/Custom Blade Signs Enhance Your Visibilit.png";
import custom4 from "../../../public/Assets/ourservice/custom/Custom Building Signs Make a Lasting First Impression.png";
import custom5 from "../../../public/Assets/ourservice/custom/Custom Business Signs Defining Your Brand’s Presence.png";
import custom6 from "../../../public/Assets/ourservice/custom/Custom Decals Flexible, Bold Branding Solutions.png";
import custom7 from "../../../public/Assets/ourservice/custom/Custom Van Wraps Take Your Brand on the Road.png";
import custom8 from "../../../public/Assets/ourservice/custom/Floor Graphics Advertising That’s Underfoot.png";
import custom9 from "../../../public/Assets/ourservice/custom/Directional Signs Easy Navigation, Happy Customers.png";
import custom10 from "../../../public/Assets/ourservice/custom/Office Signs or Door Signs Professional and Personalized.png";
import custom11 from "../../../public/Assets/ourservice/custom/Office Signs or Door Signs.png";
import custom12 from "../../../public/Assets/ourservice/custom/Social Distancing Signage Promoting Safety and Compliance.png";
import custom13 from "../../../public/Assets/ourservice/custom/Window Film Enhance Privacy and Aesthetics.png";

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
              Custom Signage Solutions: Crafting Your Brand’s Visual Identity
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              1Source is a seasoned provider of tailored signage with an ideal
              balance of technology, fashion, and utility. Our signs are not
              some powering marketing designer alone—but they serve as a great
              marketing tool as well that will help you gain recognition in your
              business. Dedicated to making your vision come to life in
              attention-grabbing detail. Superior custom Signs in Novi,
              Michigan, Custom Signs, in your region.x
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={custom1} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Banners: Your Message, Loud and Clear
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Looking for a quick, cost-effective way to promote your
                  business? Custom vinyl banners offer an impactful way to
                  display your message, whether you're promoting a sale, event,
                  or your brand.1Source delivers high-quality vinyl banners
                  tailored to your needs, designed for both indoor and outdoor
                  use. Let our team help you capture attention with custom
                  banners that get your message noticed.
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
                  <Image src={custom2} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Acrylic Sneeze Guards: Safety Meets Style
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  In today's health-conscious world, acrylic sneeze guards have
                  become essential for ensuring the safety of employees and
                  customers. At1Source, we provide custom acrylic sneeze guards
                  that are not only effective in reducing the spread of germs
                  but also blend seamlessly into your business environment.
                  These protective shields are ideal for offices, retail stores,
                  and public spaces where safety is a priority.
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
                  <Image src={custom3} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Blade Signs: Enhance Your Visibility
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Blade signs are an excellent choice for businesses looking to
                  capture the attention of passersby. These vertical signs
                  project outward from your building, making them visible from a
                  distance. Whether for outdoor use or interior guidance, our
                  custom blade signs are designed to fit your brand and provide
                  clear directions. Available in various shapes, sizes, and
                  finishes, these signs are an ideal solution for high-traffic
                  areas.
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
                  <Image src={custom4} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Building Signs: Make a Lasting First Impression
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Your building’s signage is the first thing customers see when
                  they visit. Make a memorable first impression with custom
                  building signs from 1Source. Whether you need a classic look
                  or a modern design, we offer a variety of materials and styles
                  to ensure your signage represents your brand’s professionalism
                  and makes it easy for customers to find you.
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
                  <Image src={custom5} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Business Signs: Defining Your Brand’s Presence
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Your business signage speaks volumes about your brand. At
                  1Source, we help you choose the perfect signs that reflect
                  your brand identity while attracting customers. From lighted
                  business signs to durable outdoor displays, we offer a full
                  range of custom business signs to ensure your business stands
                  out in a competitive marketplace.
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
                  <Image src={custom6} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Decals: Flexible, Bold Branding Solutions
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Decals are a versatile signage option that can be used in many
                  ways—from storefront windows to vehicle wraps. Whether you're
                  looking for custom vinyl decals for branding, promotion, or
                  direction,1Source has you covered. We create decals in a
                  variety of shapes and sizes, ensuring that they fit your needs
                  and enhance your brand visibility
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
                  <Image src={custom7} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Van Wraps: Take Your Brand on the Road
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Maximize your marketing reach with custom van wraps that turn
                  your vehicle into a moving billboard. Whether you're driving
                  across town or around the state, a van wrap helps increase
                  brand exposure without the ongoing costs of traditional
                  advertising. Let1Source create a stunning design that promotes
                  your business while you drive.
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
                  <Image src={custom8} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Floor Graphics: Advertising That’s Underfoot
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Floor graphics are a unique way to grab attention and promote
                  your business. Custom floor decals are ideal for creating
                  directional signage, highlighting promotions, or adding a fun,
                  creative element to your space. Floor graphics are a
                  cost-effective solution that delivers high visibility and
                  engages your customers in an unexpected way.
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
                  <Image src={custom9} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Directional Signs: Easy Navigation, Happy Customers
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Directional signs are essential for helping customers navigate
                  your space efficiently. Whether you're directing people to
                  different departments in a large building or guiding visitors
                  to your front door, custom directional signage ensures a
                  smooth experience. Invest in quality wayfinding signage from
                  1Source to keep your customers informed and your space
                  organized.
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
                  <Image src={custom10} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Office Signs or Door Signs: Professional and Personalized
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Make a great impression with custom office signs that reflect
                  your brand’s professionalism and attention to detail. Whether
                  you need a simple door sign or a comprehensive office signage
                  system,1Source designs functional and elegant signs that
                  communicate your business’s values and create a welcoming
                  atmosphere for clients and staff alike.
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
                  <Image src={custom11} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">Office Signs or Door Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Signs are primarily there to provide information, but anyone
                  can haphazardly write their business hours on a piece of paper
                  and stick it outside their office door using masking tape if
                  that’s all we need to do. Professional business owners,
                  however, want to do more; they want to share their company
                  values and express their commitment to excellence through
                  functional and elegant office door signs that speak to their
                  brand’s value.
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
                  <Image src={custom12} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Social Distancing Signage: Promoting Safety and Compliance
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  In today’s environment, social distancing is key to
                  maintaining a safe space for employees and customers. 1Source
                  offers high-quality social distancing signs and decals to help
                  your business adhere to health guidelines. From floor markings
                  to protective shields, our custom signage ensures you can
                  maintain safety while delivering excellent service.
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
                  <Image src={custom13} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Window Film: Enhance Privacy and Aesthetics
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  For offices surrounded by glass, custom window film provides
                  an excellent solution to enhance privacy and improve the
                  aesthetic of your space. Whether you're looking to add a
                  professional tint or a decorative design,1Source offers
                  high-quality window film that enhances the look of your
                  business while providing practical benefits like UV protection
                  and heat reduction.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            With custom signage solutions in Novi, Michigan that will have your
            business making an impression, at1Source, we can help. Schedule a
            consultation before each new project.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

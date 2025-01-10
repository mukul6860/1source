"use client";
import Footer from "../footer/footer";
import React, { useState } from "react";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import largefrmat1 from "../../../public/Assets/ourservice/largefrmat/Custom Banner Printing.png";
import largefrmat2 from "../../../public/Assets/ourservice/largefrmat/Trade Show Display Printing Your Booth, Your Brand.png";
import largefrmat3 from "../../../public/Assets/ourservice/largefrmat/Poster Printing Solutions Powerful Visuals for Every Occasion.png";
import largefrmat4 from "../../../public/Assets/ourservice/largefrmat/Large Format Printing in Michigan Vibrancy and Durability Combined.png";
import largefrmat5 from "../../../public/Assets/ourservice/largefrmat/Custom Banners and Posters in Novi, MI Personalized to Your Brand.png";

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
              Large Format Printing Services in Michigan: Make Your Brand Stand
              Out
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              With1Source you get large format printing services that will
              reproduce your work in such a way that will leap off the page and
              inspiration your audience. From designing eye-catching banners and
              custom posters, to creating stunning trade show displays, we have
              custom solutions that are perfect for stepping up your brand game.
              That is why we offer ideal solutions in Michigan, and Novi
              businesses – where only high-quality, personalized printing can
              make the difference in drawing customers in and capturing their
              interest.
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={largefrmat1} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Banner Printing: Captivate with Every Display
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Custom banners are a powerful tool for any business looking to
                  stand out. Whether you need banners for a special event,
                  outdoor advertising, or retail promotions, our
                  <b> custom banner printing </b> ensures your message is
                  visible and impactful. We offer a range of options, from
                  lightweight vinyl banners to durable, weather-resistant
                  materials that hold up to the elements. With vibrant colors
                  and custom designs, your banners will make a lasting
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
                  <Image src={largefrmat2} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Trade Show Display Printing: Your Booth, Your Brand
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Trade shows are a fantastic opportunity to showcase your
                  business, and your display should reflect your brand’s
                  professionalism and creativity. Our
                  <b> trade show display printing</b> services help you create a
                  memorable experience for attendees. From large format graphics
                  to pop-up displays, we provide high-quality, customizable
                  solutions that ensure your booth stands out. Our printing
                  technology produces sharp, high-definition images, making your
                  branding materials pop with clarity and detail.
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
                  <Image src={largefrmat3} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Poster Printing Solutions: Powerful Visuals for Every Occasion
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Posters are an excellent way to communicate your message in a
                  bold and eye-catching manner. Whether it’s for marketing,
                  events, or in-store promotions, our
                  <b> poster printing solutions </b>
                  are designed to bring your ideas to life. With a variety of
                  finishes and paper options, we work with you to create posters
                  that perfectly match your vision. Whether you need small runs
                  or large quantities, we deliver exceptional quality that
                  guarantees a high-impact visual experience.
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
                  <Image src={largefrmat4} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Large Format Printing in Michigan: Vibrancy and Durability
                  Combined
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  When it comes to <b> large format printing in Michigan,</b>
                  quality and durability are essential. At <b>1Source,</b>
                  we use the latest printing technology to ensure your materials
                  are not only visually stunning but also built to last. Our
                  large format solutions include posters, banners, signs, and
                  more, all printed with rich, vibrant colors that catch the
                  eye. Whether you need indoor or outdoor materials, our prints
                  are designed to withstand the elements while maintaining their
                  visual integrity.
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
                  <Image src={largefrmat5} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Custom Banners and Posters in Novi, MI: Personalized to Your
                  Brand
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  At <b>1Source,</b> we understand that every business is
                  unique. That’s why we offer
                  <b> custom banners and posters in Novi, MI, </b> tailored to
                  your specific needs. Whether you’re looking for an oversized
                  poster to promote your next event or a custom banner for a
                  grand opening, we ensure that your materials reflect your
                  brand’s personality and message. We work closely with you
                  throughout the design and production process to ensure your
                  custom print materials exceed expectations.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            Ready to create eye-catching prints that elevate your business?
            <b> Contact1Source </b> today for your
            <b> large format printing services </b> and get started on your next
            project. Let’s bring your brand to life with vibrant, durable, and
            custom-printed materials that make a lasting impression.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import "../../Homepage/Homepage.scss";
import Footer from "../../footer/footer";
import monument1 from "../../../../public/Assets/Blogs/monument1.png";

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
              The Impact of Monument Signs: Enhancing Brand Visibility
            </div>
            <div className="project-content">
              When it comes to promoting your business, visibility is key. One
              of the most effective ways to increase your brand's visibility is
              through the use of monument signs. These large, permanent signs
              are typically placed at the entrance of a business or property and
              can have a significant impact on your brand's visibility. In this
              article, we will explore the benefits of monument signs and why
              they are a valuable investment for any business.
            </div>
            <div className="subheading">Monument Signs vs Pylon Signs</div>
            <div className="project-content">
              Before we dive into the benefits of monument signs, it's important
              to understand the difference between monument signs and pylon
              signs. Pylon signs are tall, freestanding signs that are typically
              used to advertise multiple businesses in a shopping center or
              business park. On the other hand, monument signs are shorter,
              ground-level signs that are specific to one business or property.
              While both types of signs can be effective in promoting your
              business, monument signs offer a more personalized and impactful
              approach.
            </div>
            <div className="subheading">Enhance Brand Visibility</div>

            <div className="project-image-container">
              <Image src={monument1} alt="" />
              <div className="image-license-tag">
                by Don Ross III (https://unsplash.com/@drossthethird)
              </div>
            </div>
            <div className="project-content">
              One of the main benefits of monument signs is their ability to
              enhance brand visibility. These signs are typically placed at the
              entrance of a business or property, making them one of the first
              things that potential customers see. This can be especially
              beneficial for businesses located in high-traffic areas, as it
              allows them to stand out among their competitors. Additionally,
              monument signs can be customized with your brand's logo and
              colors, making them a powerful tool for brand recognition.
            </div>
            <div className="subheading">Increase Foot Traffic</div>
            <div className="project-content">
              By increasing your brand's visibility, monument signs can also
              help increase foot traffic to your business. As mentioned before,
              these signs are often placed in high-traffic areas, making them a
              great way to attract potential customers. Additionally, monument
              signs can be designed to include directional information, making
              it easier for customers to find your business. This can be
              especially helpful for businesses located in large shopping
              centers or business parks.
            </div>
            <div className="subheading">Cost-Effective Advertising</div>
            <div className="project-content">
              Compared to other forms of advertising, monument signs are a
              cost-effective option for promoting your business. Once installed,
              these signs require very little maintenance and can last for many
              years. This means that you can continue to reap the benefits of
              increased brand visibility without having to constantly invest in
              new advertising methods. Additionally, monument signs are a
              one-time investment, making them a more affordable option in the
              long run.
            </div>
            <div className="subheading">
              Find Monument Sign Companies Near You
            </div>
            <div className="project-content">
              If you're interested in investing in a monument sign for your
              business, it's important to find a reputable and experienced
              company to work with. A quick search for "monument sign companies
              near me" can help you find local businesses that specialize in
              creating and installing these signs. Be sure to research their
              portfolio and read reviews from previous clients to ensure that
              you are working with a company that can deliver high-quality and
              effective monument signs. <br /> In conclusion, monument signs are
              a valuable investment for any business looking to enhance their
              brand visibility and attract more customers. By understanding the
              benefits of these signs and working with a reputable company, you
              can effectively promote your business and stand out among your
              competitors. Have you seen the impact of monument signs on your
              own business? Let us know in the comments.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import "../../Homepage/Homepage.scss";
import Footer from "../../footer/footer";
import decals1 from "../../../../public/Assets/Blogs/decals1.png";
import decals2 from "../../../../public/Assets/Blogs/decals2.png";
import decals3 from "../../../../public/Assets/Blogs/decals3.png";
import decals4 from "../../../../public/Assets/Blogs/decals4.png";

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
        <Link className="back-blog-btn-container" href="/blogs">
          <div className="back-blog-btn">
            <AiOutlineArrowLeft />
          </div>
          <div className="back-blog-text">Back</div>
        </Link>
        <div className="project-details-container">
          <div className="project-details-wraper">
            <div className="heading">Exploring the Artistry of Decals</div>
            <div className="project-content">
              Decals are a versatile and creative way to add a personal touch to
              any surface. From walls to cars, decals offer endless
              possibilities for customization and self-expression. In this
              article, we'll dive into the world of decals and explore the
              artistry behind this popular form of decoration.
            </div>
            <div className="subheading">What Are Decals?</div>
            <div className="project-content">
              Decals are adhesive designs or images that can be transferred onto
              a surface. They are typically made from vinyl or paper and can be
              applied to a variety of surfaces, including walls, windows, cars,
              and even laptops. Decals are a popular choice for adding a
              personal touch to everyday objects and spaces.
            </div>
            <div className="subheading">Types of Decals</div>
            <div className="project-content">
              There are several types of decals, each with its own unique
              characteristics and uses. Some of the most common types of decals
              include: <br /> ⦁ Wall Decals: These are large, adhesive designs
              that can be applied to walls to create a statement piece or add a
              pop of color to a room. <br /> ⦁ Car Decals: These are smaller
              decals that are designed specifically for use on cars. They can be
              used for personalization or as a form of advertising. <br /> ⦁
              Window Decals: These are decals that are designed to be applied to
              windows. They can be used for decorative purposes or to display
              important information, such as store hours or business logos.
              <br /> ⦁ Laptop Decals: These are small decals that are designed
              to be applied to laptops or other electronic devices. They are a
              popular way to add personality to a device and make it stand out.
              <br /> ⦁ Custom Decals: These are decals that are designed and
              printed to meet specific requirements. They can be used for a
              variety of purposes, from branding to personalization.
            </div>
            <div className="subheading">The Artistry of Decals</div>
            <div className="project-image-container">
              <Image src={decals1} alt="" />
              <div className="image-license-tag">
                by Spacejoy (https://unsplash.com/@spacejoy)
              </div>
            </div>
            <div className="project-content">
              Decals are more than just stickers – they are a form of art. From
              the design process to the application, there is a level of
              creativity and skill involved in creating and using decals.
            </div>
            <div className="subheading">Decal Ideas and Designs</div>
            <div className="project-content">
              The first step in creating a decal is coming up with a design
              idea. This can be a simple image or a complex design, depending on
              the purpose of the decal. Some popular decal design ideas include:
              <br />
              ⦁ Nature-inspired designs: These can include floral patterns,
              landscapes, or animals. <br /> ⦁ Quotes or phrases: These can be
              motivational, funny, or inspirational. <br /> ⦁ Geometric
              patterns: These can add a modern and abstract touch to any
              surface. <br /> ⦁ Custom designs: These can be anything from a
              company logo to a personal illustration. <br /> The possibilities
              for decal designs are endless, and the only limit is your
              imagination.
            </div>
            <div className="subheading">Decal Printing</div>
            <div className="project-content">
              Once a design is finalized, the next step is to print the decal.
              Decals can be printed using a variety of methods, including screen
              printing, digital printing, and offset printing. Each method has
              its own advantages and is chosen based on the type of decal and
              the desired outcome. <br /> Screen printing is a popular choice
              for large, high-quality decals, while digital printing is often
              used for smaller, more intricate designs. Offset printing is a
              cost-effective option for large quantities of decals.
            </div>
            <div className="subheading">Application Techniques</div>
            <div className="project-image-container">
              <Image src={decals2} alt="" />
              <div className="image-license-tag">
                by Austin Distel (https://unsplash.com/@austindistel)
              </div>
            </div>
            <div className="project-content">
              Applying a decal is an art in itself. It requires precision,
              patience, and attention to detail. There are several techniques
              for applying decals, depending on the type of decal and the
              surface it is being applied to. <br /> For wall decals, the most
              common technique is the "hinge method." This involves placing the
              decal on the wall and securing it in place with tape. The decal is
              then lifted and one side is peeled off, while the other side is
              smoothed onto the wall. This process is repeated until the entire
              decal is applied. <br /> For car decals, the "wet method" is often
              used. This involves spraying the surface with a mixture of water
              and soap before applying the decal. The decal can then be adjusted
              and smoothed onto the surface before the water and soap mixture is
              wiped away.
            </div>
            <div className="heading">The Benefits of Decals</div>
            <div className="project-content">
              Decals offer a range of benefits, making them a popular choice for
              personalization and decoration.
            </div>
            <div className="subheading">Easy to Apply and Remove</div>
            <div className="project-content">
              One of the main benefits of decals is that they are easy to apply
              and remove. Unlike paint or wallpaper, decals can be applied
              without any special tools or skills. They can also be removed
              without causing damage to the surface they were applied to.
            </div>
            <div className="subheading">Cost-Effective</div>
            <div className="project-content">
              Decals are a cost-effective way to add a personal touch to any
              space or object. They are much more affordable than other forms of
              decoration, such as custom paint or wallpaper.
            </div>
            <div className="subheading">Customizable</div>
            <div className="project-image-container">
              <Image src={decals3} alt="" />
              <div className="image-license-tag">
                by Christoph Wick (https://unsplash.com/@kidvolcano)
              </div>
            </div>
            <div className="project-content">
              Decals can be customized to meet specific requirements. This makes
              them a popular choice for businesses looking to promote their
              brand or individuals looking to add a personal touch to their
              belongings.
            </div>
            <div className="subheading">Versatile</div>
            <div className="project-content">
              Decals can be applied to a variety of surfaces, including walls,
              windows, cars, and laptops. This versatility makes them a popular
              choice for personalization and decoration.
            </div>
            <div className="heading">Tips for Using Decals</div>
            <div className="project-content">
              Here are some tips for using decals effectively: <br /> ⦁ Choose
              the right surface: Make sure the surface you are applying the
              decal to is clean and smooth. This will ensure that the decal
              adheres properly and looks its best. <br /> ⦁ Measure and plan:
              Before applying a decal, measure the surface and plan out the
              placement of the decal. This will help ensure that the decal is
              applied straight and in the desired location. <br /> ⦁ Use a
              squeegee: A squeegee can help smooth out any air bubbles or
              wrinkles when applying a decal. <br /> ⦁ Follow instructions:
              Different types of decals may have different application
              instructions. Be sure to follow the instructions provided to
              ensure the best results.
            </div>
            <div className="subheading">Where to Find Decals</div>
            <div className="project-image-container">
              <Image src={decals4} alt="" />
              <div className="image-license-tag">
                by Aitziber Ruiz de Eguino (https://unsplash.com/@aitziber)
              </div>
            </div>
            <div className="project-content">
              Decals can be found in a variety of places, both online and in
              physical stores. Some popular places to find decals include:
              <br /> ⦁ Etsy: This online marketplace offers a wide selection of
              custom decals from independent sellers. <br /> ⦁ Amazon: Amazon
              offers a variety of decals, from wall decals to laptop decals.
              <br /> ⦁ Craft stores: Many craft stores carry a selection of
              decals, including custom decals that can be made in-store. <br />⦁
              Online decal shops: There are many online shops that specialize in
              decals, offering a wide range of designs and customization
              options.
            </div>
            <div className="subheading">In Conclusion</div>
            <div className="project-content">
              Decals are a versatile and creative way to add a personal touch to
              any surface. From walls to cars, decals offer endless
              possibilities for customization and self-expression. With the
              right design, printing, and application techniques, decals can
              transform any space or object into a work of art. So why not
              explore the world of decals and add a touch of artistry to your
              life?
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;

"use client";
import React, { useState } from "react";
import Footer from "../footer/footer";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";

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
function ImPhone() {
  return (
    <svg
      stroke="black"
      fill="black"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
    </svg>
  );
}

function AiFillHome() {
  return (
    <svg
      stroke="black"
      fill="black"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
    >
      <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted with data:", {
      firstName,
      lastName,
      email,
      company,
      number,
      description,
      file,
    });
  };

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };
  const router = useRouter();

  return (
    <>
      <div style={{ position: "relative", overflow: "auto", height: "100vh" }}>
        <div className="header-content-container">
          <div className="content-container">
            <IoMdCall />
            248-735-9999
          </div>
          <div className="content-container">
            <GrMail />
            info@the1source.com
          </div>
          <div className="content-container">26600 Heyn Dr, Novi, MI 48374</div>
        </div>
        <div className="header-container">
          <div className="nav-container">
            <div className="nav-logo">
              <a onClick={() => router.push("/")}>
                <Image src={logo1} alt="Company Logo" />
              </a>
            </div>

            <div className="nav-menu-container">
              <div className="dropdown">
                <div className="nav-menu dropdown">
                  Who We Are
                  <BiChevronDown />
                </div>
                <div className="dropdown-content">
                  <a className="btn" onClick={() => router.push("/ourhistory")}>
                    History
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    1Code Experience
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Matterport Virtual Experiences
                  </a>
                </div>
              </div>

              {/* Our Capabilities Dropdown */}
              <div className="dropdown">
                <div className="nav-menu dropdown">
                  Our Services
                  <BiChevronDown />
                </div>
                <div className="dropdown-content">
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Digital Marketing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Commercial Printing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Large Format Printing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/Interiorsign")}
                  >
                    Interior Signs
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Exterior Signs
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Permit & Installation
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Custom Environments
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <div className="nav-menu dropdown">
                  Projects
                  <BiChevronDown />
                </div>
                <div className="dropdown-content">
                  <a className="btn" onClick={() => router.push("/portfolio")}>
                    Our Portfolio
                  </a>
                  <a className="btn" onClick={() => router.push("/map")}>
                    Map
                  </a>
                </div>
              </div>

              <div
                className="nav-menu btn"
                onClick={() => router.push("/contactus")}
              >
                Contact
              </div>
              <div
                className="nav-btn btn"
                onClick={() => router.push("/getquote")}
              >
                Get Quote
              </div>
            </div>
          </div>
        </div>
        <div className="contact-banner-container">
          <div className="contact-banner-content-container">
            <div className="contact-banner-tag">Contact Us</div>
            <div className="underline"></div>
            <div className="contact-banner-description">
              Need help making your vision a reality? Fill out the form below
              and tell us more about your project and we’ll get in touch with
              you to discuss how 1Source can help.
            </div>
          </div>
        </div>
        <div className="contact-main-container">
          <div className="contact-sub-container">
            <div className="contact-tag">1Source</div>
            <div className="underline"></div>
            <div className="contact-content-container">
              <div className="contact-container">
                <div className="contact-sub-container1">
                  <div className="contact-icon">
                    <ImPhone />
                  </div>
                  <div className="contact-icon">
                    <AiFillHome />
                  </div>
                  <div className="contact-icon">
                    <GrMail />
                  </div>
                </div>
                <div className="contact-sub-container2">
                  <div className="contact-row">
                    <div className="table-contact-tags">248-735-9999</div>
                  </div>
                  <div className="contact-row">
                    <div className="table-contact-tags">
                      26600 Heyn Dr, Novi, MI 48374
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="table-contact-tags">
                      <a href="mailto:info@the1source.com">
                        info@the1source.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-map-container">
              <div className="white-space"></div>
              <iframe src="https://www.google.com/maps/d/embed?mid=1j07WCgHA1KFnR8kLd6xbWgJpAWDclZs&ehbc=2E312F&noprof=1"></iframe>
            </div>
          </div>
          <div className="devider"></div>
          <div className="contact-sub-container">
            {/* form start */}
            <form onSubmit={handleSubmit} className="form">
              <div className={`form-group fiftywidth`}>
                <label htmlFor="firstName">Fist Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className={`form-group fiftywidth`}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className={`form-group fiftywidth`}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className={`form-group fiftywidth`}>
                <label htmlFor="number">Phone Number</label>
                <input
                  type="tel"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="file">Upload File</label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="form-control"
                />
              </div>
              <div className="button-group">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setCompany("");
                    setNumber("");
                    setDescription("");
                    setFile(null);
                  }}
                  className="reset-button"
                >
                  Reset
                </button>
              </div>
            </form>
            {/* form end */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
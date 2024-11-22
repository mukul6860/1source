import React from "react";
import "./footer.scss";
import Image from "next/image";
import Logo from "../../../public/Assets/1source.jpg";
function FiFacebook() {
  return (
    <svg
      stroke="white"
      fill="none"
      strokeWidth={1}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function FiInstagram() {
  return (
    <svg
      stroke="white"
      fill="none"
      strokeWidth={1}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <rect x={1} y={1} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} y1={6.5} x2={17.5} y2={6.5} />
    </svg>
  );
}

function FiTwitter() {
  return (
    <svg
      stroke="white"
      fill="none"
      strokeWidth={1}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function FiLinkedin() {
  return (
    <svg
      stroke="white"
      fill="none"
      strokeWidth={1}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x={2} y={9} width={4} height={12} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}
function GrMail() {
  return (
    <svg
      stroke="white"
      fill="white"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
      />
    </svg>
  );
}

function ImPhone() {
  return (
    <svg
      stroke="white"
      fill="white"
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
      stroke="white"
      fill="white"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
    >
      <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
    </svg>
  );
}
function footer() {
  return (
    <>
      <div className="footer-main-container" id="contact">
        <div className="footer-first-container">
          <div className="footer-row">
            <div className="company-logo">
              <Image src={Logo} alt="" />
            </div>
          </div>
          <div className="footer-row">
            {/* <div className="company-description">
              Conubia at torquent vivamus bibendum semper nibh.
            </div> */}
          </div>
          <div className="footer-row">
            <div className="social-icon-container">
              <div className="social-icon ">
                <FiFacebook />
              </div>
              <div className="social-icon ">
                <FiInstagram />
              </div>
              <div className="social-icon ">
                <FiTwitter />
              </div>
              <div className="social-icon ">
                <FiLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-second-container">
          <div className="footer-content-container">
            <div className="footer-about-tag">About</div>
            <div className="footer-content">
              <div className="footer-content-row">Who We Are</div>
              <div className="footer-content-row">Our Capabilties</div>
              <div className="footer-content-row">Projects</div>
              <div className="footer-content-row">Latest News</div>
              <div className="footer-content-row">ContactUs</div>
            </div>
          </div>
        </div>
        <div className="footer-third-container">
          <div className="footer-content-container">
            <div className="footer-content-tag">Contact Us</div>
            <div className="footer-content">
              <div className="contact-container">
                <div className="contact-sub-container1">
                  <div className="social-media-icon">
                    <ImPhone />
                  </div>
                  <div className="social-media-icon">
                    <AiFillHome />
                  </div>
                  <div className="social-media-icon">
                    <GrMail />
                  </div>
                </div>
                <div className="contact-sub-container2">
                  <div className="contact-row">
                    <div className="table-contact-data">248-735-9999</div>
                  </div>
                  <div className="contact-row">
                    <div className="table-contact-data">
                      26600 Heyn Dr, Novi, MI 48374
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="table-contact-data">
                      <a href="mailto:info@the1source.com">
                        info@the1source.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;

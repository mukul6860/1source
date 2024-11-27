"use client";
import Footer from "../footer/footer";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import dimage from "../../../public/Assets/carddummy.webp";

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
              <Image src={logo1} alt="Company Logo" />
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
                  <a className="btn" href="#">
                    Our Team
                  </a>
                  <a className="btn" href="#">
                    Careers
                  </a>
                </div>
              </div>

              {/* Our Capabilities Dropdown */}
              <div className="dropdown">
                <div className="nav-menu dropdown">
                  Our Capabilities
                  <BiChevronDown />
                </div>
                <div className="dropdown-content">
                  <a className="btn" href="#">
                    Link 1
                  </a>
                  <a className="btn" href="#">
                    Link 2
                  </a>
                  <a className="btn" href="#">
                    Link 3
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

              <div className="nav-menu">Contact</div>
              <div className="nav-btn">Get Quote</div>
            </div>
          </div>
        </div>
        <div className="ourhistory-banner-container">
          <div className="ourhistory-banner-content-container">
            <div className="ourhistory-banner-tag">Who We Are</div>
            <div className="underline"></div>
            <div className="ourhistory-banner-description">
              Discover the canvas of innovation at bo-mar, where each project is
              a masterpiece blending functionality with artistic flair. Here,
              you’ll see how our dedication to detail and design transforms
              visions into tangible, awe-inspiring realities.
            </div>
          </div>
        </div>
        <div className="ourhistory-main-container">
          <div className="ourhistory-content-container">
            <div className="ourhistory-tag">Our History</div>
            <div className="underline"></div>
            <div className="ourhistory-content">
              Founded in 1995 It’s true, we’ve always been ambitious. We started
              as a small venture with a big idea. to revolutionize the printing
              industry! At first, our product offering was modest: we had a
              couple of printers, a screen press, and a handful of like-minded
              hard workers. But we knew, even then, that we would need to grow
              to achieve our shared vision. So we rolled our sleeves up even
              higher and we worked, driven by our passion for innovation and
              excellence. Expanding Services After years of 24-hour press runs,
              loads of elbow grease (and no small amount of printer grease
              too!), countless impromptu problem-solving huddles, and
              caffeine-fueled late-night strategy sessions, we finally found
              ourselves in a position to partner up with another sign company
              and broaden our service offerings. That move proved to be a
              resounding success, so we did it again, and then again. And in
              2010, we embraced the digital age by adding digital marketing and
              large-format digital printing to our portfolio. This strategic
              expansion not only enhanced our capabilities but also allowed us
              to better serve our diverse clientele. Industry Leader Today, our
              family of companies has banded together under the 1Source name.
              Together, we stand at the forefront of printing technology. Our
              unwavering commitment to delivering outstanding print, sign, and
              digital solutions is the cornerstone of our success. We
              continuously invest in the latest advancements, ensuring that we
              consistently deliver exceptional results that exceed our clients’
              expectations. At 1Source, we don’t just print; we craft
              excellence. Join us on this journey as we continue to push the
              boundaries of what’s possible.
            </div>
          </div>
          <div className="ourhistory-image-container">
            <div className="image-wraper">
              <Image src={dimage} alt="ourhistory content image" />
            </div>
          </div>
        </div>
        <div className="space"></div>
        <Footer />
      </div>
    </>
  );
}

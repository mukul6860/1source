"use client";
import Footer from "../footer/footer";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import dimage from "../../../public/Assets/carddummy.webp";
import "./page.scss";
import Link from "next/link";

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
          <div className="content-container border-right-left">
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
              {/* <div
              className="nav-menu btn"
              onClick={() => router.push("/ourhistory")}
            >
              History
            </div> */}

              <div
                className="nav-menu btn"
                onClick={() => router.push("/1codeexperiance")}
              >
                Upload Center
              </div>
              <div
                className="nav-menu btn"
                onClick={() => router.push("/review")}
              >
                Customer Reviews
              </div>
              <div
                className="nav-menu btn"
                onClick={() => router.push("/1codeexperiance")}
              >
                Virtual Consultation Booking
              </div>
              <div
                className="nav-menu btn"
                onClick={() => router.push("/blogs")}
              >
                Insights & Resources
              </div>

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
                    onClick={() => router.push("/exteriorsign")}
                  >
                    Exterior Signs
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Permit & Installation
                  </a>
                  <a className="btn" onClick={() => router.push("/customsign")}>
                    Custom Environments
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

              {/* <div
              className="nav-menu btn"
              onClick={() => router.push("/contactus")}
            >
              Contact
            </div> */}
            </div>
          </div>
        </div>
        <div className="portfolio-banner-container">
          <div className="portfolio-banner-content-container">
            <div className="portfolio-banner-tag">Our Work in Action</div>
            <div className="underline"></div>
            <div className="portfolio-banner-description">
              Discover the canvas of innovation at bo-mar, where each project is
              a masterpiece blending functionality with artistic flair. Here,
              you’ll see how our dedication to detail and design transforms
              visions into tangible, awe-inspiring realities.
            </div>
          </div>
        </div>
        <div className="portfolio-card-wraper">
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">first project</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
          <Link className="portfolio-cards" href="/portfolio/firstproject">
            <div className="portfolio-card-content-wraper">
              <div className="portfolio-cards-tag">tags</div>
              <div className="portfolio-card-content">content</div>
            </div>
            <Image src={dimage} alt="" />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

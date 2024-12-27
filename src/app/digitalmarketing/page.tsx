"use client";
import Footer from "../footer/footer";
import logo1 from "../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../Homepage/Homepage.scss";
import "./page.scss";
import productimage from "../../../public/Assets/download.jpg";

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
                Upload center
              </div>
              {/* <div
                className="nav-menu btn"
                onClick={() => router.push("/1codeexperiance")}
              >
                Virtual Consultation Booking
              </div> */}

              <div className="dropdown">
                <div className="nav-menu dropdown">
                  Our services
                  <BiChevronDown />
                </div>
                <div className="dropdown-content">
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Digital marketing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Commercial printing
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
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
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Permit & installation
                  </a>
                  <a className="btn" onClick={() => router.push("/customsign")}>
                    Custom environments
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    1Code experience
                  </a>
                  <a
                    className="btn"
                    onClick={() => router.push("/1codeexperiance")}
                  >
                    Matterport virtual experiences
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
              <a className="nav-btn" onClick={() => router.push("/getquote")}>
                Request quote
              </a>
              {/* <div
              className="nav-menu btn"
              onClick={() => router.push("/contactus")}
            >
              Contact
            </div> */}
            </div>
          </div>
        </div>
        <div className="product-banner-container">
          <div className="product-banner-content-container">
            <div className="product-banner-tag">
              Digital Marketing Services in Michigan: Expert Solutions for Your
              Online Growth
            </div>
            <div className="underline"></div>
            <div className="product-banner-description">
              As the world becomes more digitalized, one cannot afford not to
              have an online presence in the current business world. At
              The1Source, we offer innovative digital marketing services that
              empower businesses in Michigan, Novi, and beyond to thrive in the
              online world. Whether you’re looking to enhance your search engine
              visibility, captivate your audience, or drive measurable results,
              we’ve got you covered.
            </div>
          </div>
        </div>
        <div className="product-main-container">
          {/* row start */}
          <div className="product-row">
            <div className="product-sub-container">
              <div className="product-image-container">
                <div className="product-image-wrap">
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Content Development: Crafting Stories That Resonate
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Your brand has a story, and we know how to tell it. With our
                  comprehensive content marketing strategies, we create
                  high-quality blogs, articles, case studies, and more to engage
                  your audience and establish your authority. Each piece is
                  tailored to your industry and audience, ensuring your message
                  stands out in a crowded market.
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
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Social Media Management Services: Build, Engage, and Grow
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Social media is more than just posts; it’s about connection.
                  At The1Source, we provide end-to-end social media management
                  services in Michigan to help your brand grow its community.
                  From creating engaging content calendars to analyzing metrics,
                  we ensure every interaction strengthens your online reputation
                  and drives meaningful engagement.
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
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Online Advertising Solutions: Ads That Deliver Results
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Make your mark with impactful advertising. Our online
                  advertising solutions include expertly crafted banner ads,
                  display ads, and PPC campaigns that catch the eye and convert
                  clicks into customers. With a focus on ROI, we optimize every
                  campaign to meet your unique goals.
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
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  Website Design & Development: Your Digital Front Door
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Your website is often the first interaction customers have
                  with your business. At The1Source, we specialize in website
                  design and development that combines aesthetic appeal with
                  functionality. Our responsive, user-friendly designs ensure
                  visitors stay engaged and convert into loyal customers.
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
                  <Image src={productimage} alt="product image" />
                </div>
              </div>
            </div>
            <div className="product-sub-container">
              <div className="product-content-container">
                <div className="product-tag">
                  SEO and SEM Solutions: Be Found When It Matters
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Standing out on search engines isn’t just about being
                  found—it’s about being found by the right people. With our SEO
                  services in Novi, MI, we provide cutting-edge SEO and SEM
                  solutions that enhance your rankings, increase organic
                  traffic, and generate qualified leads. Our proven strategies
                  include keyword optimization, link building, and on-page
                  enhancements tailored to your business goals.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="content">
            At The1Source, we’re passionate about delivering measurable results
            and helping your business grow. Explore how our digital marketing
            services in Michigan can transform your online presence. <br />
            Contact us today to get started on your journey toward digital
            success!
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

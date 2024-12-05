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
                1Code Experience
              </div>
              <div
                className="nav-menu btn"
                onClick={() => router.push("/1codeexperiance")}
              >
                Matterport Virtual Experiences
              </div>
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
        <div className="product-banner-container">
          <div className="product-banner-content-container">
            <div className="product-banner-tag">Interior Signage</div>
            <div className="underline"></div>
            <div className="product-banner-description">
              Discover the canvas of innovation at bo-mar, where each project is
              a masterpiece blending functionality with artistic flair. Here,
              you’ll see how our dedication to detail and design transforms
              visions into tangible, awe-inspiring realities.
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
                <div className="product-tag">Acrylic Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Acrylic signs offer a variety of options to achieve the
                  professional look you need. Whether you choose crystal clear
                  acrylic for a traditional look, or frosted for a softer
                  impression, or opt for color to add sleek style, shatter-proof
                  acrylic is much stronger and more durable than glass.
                  Customize it with etching, beveled edges, or mount it off the
                  wall with standoffs.
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
                <div className="product-tag">ADA Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Essential signs should be accessible for everyone. Ensure your
                  signs are up to code and look good too. We’re ADA compliancy
                  experts who know how to make the most of materials and methods
                  to create ADA signs that complement your brand. Secure that
                  Certificate of Occupancy with style.
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
                  Wayfinding and Directory Signs
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Don’t let your customers get lost. Get them from point A to
                  point B smoothly and efficiently for a frustration free
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
                <div className="product-tag">Lobby Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  The Moment you step from the elevator, you’d be amazed at the
                  extent to which an office would be in the lobby area. For
                  someone who aims to become an entrepreneur in Michigan, you’d
                  understand how significant it is to gain and retain the trust
                  of all of your customers. Absolutely, every single such
                  opportunity assists either to hold or in many respects to lose
                  that trust. That is the reason whenever someone designs an
                  office lobby it’s very important that impresses the client
                  because of the standing of the company. That is why sometimes
                  poorly crafted reception desk signs tend to leave a sour
                  taste. In order to increase the level of trust in your
                  organization, pretend it is a good idea to advocate investing
                  in accentuated signs that accompany up the respectability of
                  the company.
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
                <div className="product-tag">Mission Statement</div>
                <div className="underline"></div>
                <div className="product-content">
                  Have you ever thought of designing and/or painting a mission
                  statement wall for your organization but you are unsure of
                  what steps to take? Most of the well established business
                  brands appreciate the need of having a mission statement since
                  that is what’s going to help them win the client trust. A
                  positive confirmation and zeal to get the job done excellently
                  also helps to enhance the employees.
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
                <div className="product-tag">Vinyl Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  These multi-purpose signs can be used both indoors and
                  outdoors on any kind of surface. As to your preferred designs,
                  you will have to say that the sky is the limit. Business
                  owners have to select the right sign partner in order to
                  utilize the benefits of vinyl signs to their maximum
                  potential. Michigan Custom Signs is one such vinyl sign shop
                  in Michigan that has been in the industry for long and has the
                  expertise to deliver the best quality of vinyl signs.
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
                <div className="product-tag">Wall Decals</div>
                <div className="underline"></div>
                <div className="product-content">
                  Wall graphics and decals are commonly seen in offices and
                  specialty stores in Michigan but companies across different
                  industries have started using wall decals for business.
                  They’ve become popular for businesses with glass conferences
                  rooms to give them an etched glass look
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
                <div className="product-tag">Wall Murals</div>
                <div className="underline"></div>
                <div className="product-content">
                  It’s tough to spend time in an office or a house that is
                  devoid of any appeal due to the same dull, blank, and drab
                  walls. One must make an effort to attract people who enter
                  their premises with the right kind of space. Even in many
                  situations where it seems more suitable, the paint barely
                  boosts the energy of the room or building. Fortunately,
                  printing technology allows us to take advantage of targeted
                  marketing visuals that traditionally have been considered
                  boring: the walls!
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
                <div className="product-tag">Wall Wraps</div>
                <div className="underline"></div>
                <div className="product-content">
                  Wall Wraps With customized wall graphics, you can create
                  endless branding possibilities in your office or some store.
                  Wall wraps can also give employees and even the visitors a
                  modern feel. Custom wall wraps are quite ideal for individuals
                  who wish to enhance the appearance of their rooms. Office
                  vinyl wall wraps are the best marketing solution as they are
                  easy to apply, not pricey, and fully customizable.
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
        </div>
        <Footer />
      </div>
    </>
  );
}

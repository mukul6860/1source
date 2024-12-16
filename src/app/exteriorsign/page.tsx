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
        <div className="product-banner-container">
          <div className="product-banner-content-container">
            <div className="product-banner-tag">Exterior Signage</div>
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
                <div className="product-tag">Channel Letter Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Channel letters are the most common type of commercial signs.
                  These are three-dimensional letters, shapes or logos that are
                  constructed independently. Channel letters are fashioned from
                  tough material such as metal and acrylic and are often
                  neon-lit inside to enhance visibility at night. Channel
                  letters are normally located on the building’s front side, but
                  can be situated in any other conspicuous point of the
                  business.
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
                <div className="product-tag">Door Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  If you plan, move or even re-create your office space in Novi,
                  Rochester Hills, Michigan area, or wherever else when
                  considering decor door business signs can help assist the
                  clients in and throughout your premises and also assist your
                  organization in terms of design. Door signs also allow the
                  passing target market to know about your organization in a
                  cheap way as it is in front of target market on a constant
                  basis and it can be in a form of advertisement on its own.
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
                <div className="product-tag">Hanging Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  The signs that hang from the ceiling also have a number of
                  purposes, both inside and outside the organization. Common
                  types of Hanging Signage. While customers are seldom concerned
                  with the need for hanging signs whilst planning their space,
                  nearly every client at some point in the design stage comes to
                  the understanding of how useful hanging signs can be in
                  realizing their objectives. Hanging signs are exploited by
                  several businesses in one way or the other.
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
                <div className="product-tag">Metal Sign</div>
                <div className="underline"></div>
                <div className="product-content">
                  A discussion of auspicious opportunities would not be complete
                  without mentioning the metal detail. And what is its best
                  quality? durability. And what is its best quality? durability.
                  However, that isn’t the best reason to design personalized
                  metal signs for your business. The best reason is how amazing
                  they look and the style they add to your business.
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
                <div className="product-tag">Monument Sign</div>
                <div className="underline"></div>
                <div className="product-content">
                  With regards to creating a huge and captivating image for your
                  Michigan company, the monument sign can take the center stage
                  owing to the style and appeal offered by it. By virtue of
                  their very structure, these signs are more beautiful than
                  those adopted in the traditional sense and do not hang on the
                  building they are enclosing, but rather are placed around its
                  periphery.
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
                <div className="product-tag">Real Estate</div>
                <div className="underline"></div>
                <div className="product-content">
                  There’s a feeling that some of us have experienced before: a
                  house on a quiet street that has a For Sale sign posted in the
                  yard. They usually have the same set of information, along
                  with color. But more importantly, it has the words “FOR SALE”
                  and a person’s name and contact number. A little while later
                  when you drive past that house, a banner saying “SOLD” is most
                  likely there. It’s hard to imagine a neighborhood devoid of
                  real estate signs — they are as ubiquitous as sidewalks and
                  trees, minivans and bushes. However, in most hot real estate
                  markets today, these signs remain an eyesore and attract very
                  little attention unless one is in the market for a new
                  property. As this is a plumbing service that focuses heavily
                  on its branding, it would be a hassle to have its own custom
                  real-estate yard signs. For that reason, we encourage you to
                  reach out to Michigan Custom Signs.
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
                <div className="product-tag">Parking Sign</div>
                <div className="underline"></div>
                <div className="product-content">
                  Business owners are accustomed to putting money only into
                  signs with advertising elements like channel letters or
                  monument signs. However your company is not only about
                  advertising, but also about providing services. You can get
                  assistance with that aspect of your business by using parking
                  signs in Novi, Rochester Hils, Michigan. Let your patrons
                  locate the parking area thanks to our signs while you
                  concentrate on other more pressing issues.
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
                <div className="product-tag">Political Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Politics is rife with polarization nowadays. Even so,
                  regardless of how we may differ on various issues, one thing
                  that we still have in common is the process of politics
                  through democracy. Each time there are elections, the “Vote
                  for” signs come out and the “I voted” stickers are
                  distributed. Custom political signs in this regard would be
                  very useful if you want to show your support as part of a
                  campaign, or social/political or simply wish to voice your
                  opinion on any issue for that matter.
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
                  School Signs: Big & Distinctive!
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  Whenever one is tasked with thinking about the role of signs
                  in life today, many will likely think about such places as
                  shopping centers, business centers or urbanized road
                  interchanges — the places that require advertisement, labor
                  efficiency, and safe navigation. Those are effective signs but
                  only if the target audience sees them. However, this is not
                  the case because there are other areas where quality signage
                  is required like in schools.
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
                  Signs for Golf Tournaments: No Confusion Here!
                </div>
                <div className="underline"></div>
                <div className="product-content">
                  There are few things that can match the thrill of throwing
                  professional golf tournaments. These tourneys include PGA
                  tours as well as charitable events, which are quite popular
                  and helpful to businesses and their advertisers. Most people
                  assume that only top end high-class companies or brands are
                  able to advertise, but that is not true as smaller, local or
                  medium sized companies can also take advantage of it.
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
                <div className="product-tag">Window Graphics</div>
                <div className="underline"></div>
                <div className="product-content">
                  Window Graphics Even though they are the most visible part of
                  the business presence, when it comes to a retail business or
                  any other commercial premises, storefront windows are usually
                  the last things that comes to one’s mind. Store fronts with
                  windows donot need much explanation. Such glass surfaces do
                  not evoke any specific interest. Very few people actually put
                  in the effort into turning the windows into a marketing tool.
                  That has to stop! If you own stores, don’t make the same
                  mistake any longer! Use window graphics and see what
                  opportunities are lost!
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

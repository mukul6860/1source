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
            <div className="product-banner-tag">Custom Signage</div>
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
                <div className="product-tag">Custom Banners</div>
                <div className="underline"></div>
                <div className="product-content">
                  If you are looking for a quick and easy way to promote your
                  products and services, vinyl banners are the perfect
                  eye-catching and efficient way to get your message across. At
                  Michigan Custom Signs, we will help you push your brand
                  forward. Our experienced team is available to discuss your
                  banner needs. Whether you need a banner for outdoor or indoor
                  use, Michigan Custom Signs is capable of delivering your
                  demands.
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
                <div className="product-tag">Acrylic Sneeze Guards</div>
                <div className="underline"></div>
                <div className="product-content">
                  Because of the global pandemic, people across the globe are
                  coming up with different ways to stay protected. Not only
                  that, there are plenty of efforts to slow down and reduce the
                  spread of the virus. As the world strives to continue with
                  everyday activities, businesses have resumed operations.
                  Health and safety guidelines have been put in place. This is
                  to ensure the safety of both customers and employees. Part of
                  this is installing acrylic sneeze guards and desk shields.
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
                <div className="product-tag">Custom Banners</div>
                <div className="underline"></div>
                <div className="product-content">
                  If you are looking for a quick and easy way to promote your
                  products and services, vinyl banners are the perfect
                  eye-catching and efficient way to get your message across. At
                  Michigan Custom Signs, we will help you push your brand
                  forward. Our experienced team is available to discuss your
                  banner needs. Whether you need a banner for outdoor or indoor
                  use, Michigan Custom Signs is capable of delivering your
                  demands.
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
                <div className="product-tag">Custom Blade Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Blade signs are very popular, especially in strip malls or
                  areas in Michigan where foot traffic is high. So, what is a
                  blade sign? Vertical blade signs protrude from the building
                  and have a frame of sorts connecting it. There are many
                  different uses of blade signs, and there are many types of
                  blade signs, including different shapes. There are illuminated
                  blade signs, interior blade signs, and outdoor blade signs
                  that provide directions and information. This helps increase
                  the amount of visibility from the outside of the building, but
                  these signs are used inside to direct people to certain
                  destinations within the building.
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
                <div className="product-tag">Custom Building Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Few things are more important for a business than knowing that
                  customers can find their offices or retail location.
                  Commercial building signs matter more than all other forms of
                  signage for many businesses. They are often the first type of
                  signage considered by new companies. Custom building signs
                  serve many functions for a business.
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
                <div className="product-tag">Custom Business Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  If you have an existing business or are considering starting
                  one, it isn’t uncommon to wonder what is a business sign and
                  what it can do for you. You may be familiar with the standard
                  exterior business signs and lighted business signs, but so
                  many more types of signage exist. Each one of them serves a
                  specialized purpose in elevating your brand and bringing in
                  more business.
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
                <div className="product-tag">Custom Decals</div>
                <div className="underline"></div>
                <div className="product-content">
                  Looking for unique and adaptable sign options that can help
                  your brand or message stand out? Custom decals could be just
                  what you’re looking for. Michigan businesses, restaurants, and
                  retail stores are taking advantage of this advertising option
                  and adding vinyl and custom decals to better reach their
                  customers, which are available in a variety of sizes, shapes,
                  and quantities.
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
                <div className="product-tag">Custom Van Wraps</div>
                <div className="underline"></div>
                <div className="product-content">
                  When it comes to efficient advertising and brand-building in
                  Michigan, you just cannot beat van wraps. You can use
                  billboards, print media, and other paid forms of advertising,
                  but those are often expensive. You also pay daily, weekly, or
                  monthly to get your name out in front of potential customers.
                  Then you have to pay again and again without knowing if your
                  marketing is having any impact.
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
                <div className="product-tag">Floor Graphics</div>
                <div className="underline"></div>
                <div className="product-content">
                  Compelling advertising is essential for the success of your
                  business. Today, traditional signage faces a lot of
                  competition and sometimes gets lost among more modern,
                  eye-catching signage options. Floor graphics advertising
                  offers a cost-effective and visible solution. By using
                  customized floor graphics, decals, and floor stickers, this
                  type of advertising can be attention-grabbing and memorable.
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
                <div className="product-tag">Directional Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  As the name implies, directional wayfinding signs help people
                  find their way to your business establishment and navigate
                  your spaces with ease. A well-planned and professionally
                  designed signage system allows customers and visitors to enjoy
                  their experience within your business environment. Inadequate
                  signs or the lack thereof, on the other hand, may cause
                  confusion and result in unpleasant feelings of uncertainty,
                  leaving people lost or inconvenienced. Don’t allow customers
                  to associate your brand with unpleasant feelings. Invest in a
                  signage program that supports your success.
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
                <div className="product-tag">Office Signs or Door Signs</div>
                <div className="underline"></div>
                <div className="product-content">
                  Signs are primarily there to provide information, but anyone
                  can haphazardly write their business hours on a piece of paper
                  and stick it outside their office door using masking tape if
                  that’s all we need to do. Professional business owners,
                  however, want to do more; they want to share their company
                  values and express their commitment to excellence through
                  functional and elegant office door signs that speak to their
                  brand’s value.
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
                <div className="product-tag">Social Distancing Signage</div>
                <div className="underline"></div>
                <div className="product-content">
                  In light of the global pandemic, social distancing has become
                  the new norm. It is one of the CDC’s rules for health and
                  safety. As such, businesses in Michigan have taken it upon
                  themselves to remind the public about these protocols.
                  Michigan Custom Signs is committed to helping businesses
                  promote CDC guidelines within their space. This is done
                  through social distancing signage. We offer high-quality
                  COVID-19 social distancing signs and decals for any type of
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
                <div className="product-tag">Window Film</div>
                <div className="underline"></div>
                <div className="product-content">
                  Is your office space surrounded by a lot of glass? These
                  window films for offices can be used to create a great space
                  with a sophisticated and professional appearance. Sign
                  solutions are always worth investing in when looking for ways
                  to make your business stand out. Michigan window filming from
                  Michigan Custom Signs will protect your windows and your
                  business. We provide high-quality window films and tints for
                  your commercial needs. Give us a call today if you’re looking
                  for the best window film near me.
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

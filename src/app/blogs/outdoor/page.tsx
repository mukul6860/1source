"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import "../../Homepage/Homepage.scss";
import Footer from "../../footer/footer";
import effective1 from "../../../../public/Assets/Specialty_Photos/ArtVan_Misc/Art Van Canton_05.jpg";
import outdoor1 from "../../../../public/Assets/Blogs/outdoor1.png";

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

function CgChevronDoubleRight() {
  return (
    <svg
      stroke="brown"
      fill="none"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path
        d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
        fill="brown"
      />
      <path
        d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
        fill="brown"
      />
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
        <div className="project-details-container">
          <div className="project-details-wraper">
            <div className="heading">
              Say Goodbye to Dust: Innovative Technologies in Outdoor Signage
            </div>
            <div className="project-content">
              Outdoor signage is a crucial part of any business's marketing
              strategy. It's a way to attract attention, convey information, and
              reinforce branding. <br /> However, maintaining these signs can be
              a challenge, especially in dusty environments. Dust can obscure
              the message, degrade the materials, and lead to frequent, costly
              cleanings. <br /> Enter dust-resistant outdoor signage tech. This
              innovative solution promises low-maintenance, high-performance
              outdoor displays that stay clean and clear, even in the dustiest
              conditions. <br /> In this article, we'll explore the latest in
              dust-resistant outdoor signage technologies, their benefits, and
              how they can revolutionize your outdoor marketing efforts.
            </div>
            <div className="project-image-container">
              <Image src={outdoor1} alt="" />
              {/* <div className="image-license-tag">
                by Nick Fewings (https://unsplash.com/@jannerboy62)
              </div> */}
            </div>
            <div className="subheading">
              The Importance of Dust Resistance in Outdoor Signage
            </div>
            <div className="project-content">
              Outdoor signage is exposed to various environmental factors. Dust
              is one of the most common and problematic. It can quickly
              accumulate, obscuring the sign's message and reducing its
              effectiveness. <br /> Moreover, dust can also degrade the
              materials of the sign over time. This can lead to fading colors,
              reduced visibility, and ultimately, a shorter lifespan for the
              sign. <br />
              Dust-resistant outdoor signage tech addresses these issues. It's
              designed to repel dust, keeping the sign clean and clear for
              longer periods. This means less frequent cleaning, saving time and
              resources for businesses. <br /> Furthermore, dust-resistant signs
              maintain their high-performance even in dusty conditions. They
              continue to deliver clear, vibrant displays that attract attention
              and convey the intended message effectively. <br /> In essence,
              dust resistance in outdoor signage is about enhancing visibility,
              longevity, and overall performance. It's a key factor in
              maximizing the return on investment in outdoor marketing.
            </div>
            <div className="subheading">
              Exploring Dust-Resistant Technologies for Outdoor Displays
            </div>
            <div className="project-content">
              The world of outdoor signage technologies is constantly evolving.
              One of the most significant advancements in recent years is the
              development of dust-resistant tech. This technology is designed to
              keep outdoor displays clean and clear, even in dusty environments.
              <br />
              There are several ways to achieve dust resistance in outdoor
              signage. Some signs are made from materials that naturally repel
              dust. Others are coated with special substances that prevent dust
              from sticking to the surface. <br /> Here are a few examples of
              dust-resistant technologies used in outdoor displays: <br /> ⦁
              Anti-static coatings: These coatings reduce the static charge on
              the sign's surface, preventing dust from sticking. <br />⦁
              Hydrophobic and oleophobic coatings: These coatings repel water
              and oil, which can carry dust particles. <br />⦁ Air curtain
              technology: This technology uses a thin, invisible curtain of air
              to blow dust off the sign's surface. <br /> These technologies not
              only keep the sign clean but also reduce the need for regular
              maintenance. This makes them a cost-effective solution for
              businesses looking to enhance their outdoor marketing efforts.
            </div>
            <div className="subheading">
              Low-Maintenance Signage: A Cost-Effective Solution
            </div>
            <div className="project-content">
              Outdoor signage is a crucial part of many businesses' marketing
              strategies. However, maintaining these signs can be a
              time-consuming and costly task. This is where low-maintenance,
              dust-resistant signage comes into play. <br /> Dust-resistant
              outdoor signage technologies are designed to minimize the need for
              regular cleaning. This not only saves time but also reduces the
              resources required for maintenance. As a result, businesses can
              focus more on their core operations. <br /> Moreover, these
              low-maintenance signs tend to have a longer lifespan. This is
              because dust and other particles can cause wear and tear over
              time. By resisting dust, these signs stay in good condition for
              longer, providing better value for money. <br /> In conclusion,
              investing in low-maintenance, dust-resistant signage is a
              cost-effective solution for businesses. It reduces maintenance
              costs, improves longevity, and enhances the effectiveness of
              outdoor marketing efforts.
            </div>
            <div className="subheading">
              Anti-Dust Features and High-Performance Signage
            </div>
            <div className="project-content">
              High-performance outdoor signage is a must for effective
              marketing. But, dust accumulation can hinder the performance of
              these signs. This is where anti-dust features come into play.
              <br />
              Anti-dust technologies work by repelling dust particles from the
              signage surface. This helps maintain the clarity and visibility of
              the sign, ensuring it performs at its best at all times. <br />
              Moreover, dust can cause damage to the internal components of
              digital signage. Anti-dust features help protect these components,
              ensuring the signage operates smoothly. <br /> In conclusion,
              anti-dust features are crucial for maintaining high-performance
              signage. They ensure the signs remain clear, visible, and
              functional, maximizing their marketing impact.
            </div>
            <div className="subheading">
              The Role of IP Ratings in Outdoor Signage Technologies
            </div>
            <div className="project-content">
              When it comes to outdoor signage, durability is key. This is where
              IP ratings come into play. IP ratings, or Ingress Protection
              ratings, are used to define the level of sealing effectiveness of
              electrical enclosures against intrusion from foreign bodies, such
              as dust and moisture. <br /> A high IP rating indicates that the
              signage is well-protected against dust ingress. This means that
              the internal components of the signage are less likely to be
              damaged by dust, ensuring the longevity of the sign. <br />
              Moreover, a high IP rating also means that the signage requires
              less maintenance. This can save businesses time and resources that
              would otherwise be spent on cleaning and repairs. <br /> In
              conclusion, IP ratings play a crucial role in outdoor signage
              technologies. They help ensure the durability and longevity of the
              signs, making them a key consideration when choosing outdoor
              signage.
            </div>
            <div className="subheading">
              Materials and Coatings: The First Line of Defense Against Dust
            </div>
            <div className="project-content">
              The choice of materials and coatings can greatly influence the
              dust-resistance of outdoor signage. Certain materials, such as
              stainless steel and aluminum, are naturally resistant to dust and
              corrosion. These materials are often used in the construction of
              outdoor signs due to their durability and longevity. <br /> In
              addition to the material, special coatings can also be applied to
              the signage to enhance its dust-resistance. These coatings, such
              as hydrophobic and oleophobic coatings, repel water and oil,
              preventing dust and dirt from sticking to the surface of the sign.
              <br />
              Moreover, advancements in nanotechnology have led to the
              development of self-cleaning surfaces. These surfaces can
              effectively repel dust and other particles, reducing the need for
              regular cleaning. <br /> In conclusion, the right choice of
              materials and coatings can significantly enhance the
              dust-resistance of outdoor signage, making them an essential
              consideration in the design and manufacturing process.
            </div>
            <div className="subheading">
              Case Studies: Success Stories in Dust-Resistant Signage
            </div>
            <div className="project-content">
              There are numerous success stories that highlight the
              effectiveness of dust-resistant signage. For instance, a retail
              store located in a high-dust area invested in dust-resistant
              outdoor signage. The result was a significant reduction in
              maintenance costs and an increase in visibility due to the sign's
              ability to remain clean and clear. <br /> In another case, a
              restaurant chain implemented dust-resistant digital signage for
              their outdoor menus. The signs remained clear and readable even in
              dusty conditions, enhancing customer experience and boosting
              sales. <br /> These case studies demonstrate the tangible benefits
              of investing in dust-resistant signage. They serve as a testament
              to the effectiveness of this technology in enhancing visibility,
              reducing maintenance costs, and improving overall business
              performance. <br /> In conclusion, dust-resistant signage is not
              just a theoretical concept but a practical solution that has
              proven its worth in real-world scenarios.
            </div>
            <div className="subheading">
              Selecting the Right Dust-Resistant Signage for Your Environment
            </div>
            <div className="project-content">
              Choosing the right dust-resistant signage for your environment is
              crucial. Factors such as the level of dust exposure, local
              climate, and the specific needs of your business should be
              considered. <br /> For instance, a business located in a desert
              region would require signage with high dust resistance. On the
              other hand, a business in a city might prioritize anti-graffiti
              features alongside dust resistance. <br /> The type of signage,
              whether digital or traditional, also plays a role. Digital signage
              may offer additional features like remote management and real-time
              updates, which can be beneficial in certain environments. <br />
              In conclusion, understanding your environment and business needs
              is key to selecting the right dust-resistant signage.
            </div>
            <div className="subheading">
              Future Trends: Where Dust-Resistant Signage Tech is Headed
            </div>
            <div className="project-content">
              The future of dust-resistant signage tech is promising. With
              advancements in nanotechnology, we can expect to see self-cleaning
              surfaces becoming more common. These surfaces repel dust and other
              particles, reducing the need for manual cleaning. <br /> Another
              trend is the integration of smart technologies. IoT devices could
              monitor the health of the signage and alert for necessary
              maintenance. This could significantly extend the lifespan of
              outdoor displays. <br />
              Augmented reality features are also on the horizon. These could
              provide interactive experiences, attracting more attention to the
              signage. <br /> In summary, dust-resistant signage tech is
              evolving rapidly, offering exciting possibilities for outdoor
              marketing.
            </div>
            <div className="subheading">
              Conclusion: Integrating Dust-Resistant Signage into Your Marketing
              Strategy
            </div>
            <div className="project-content">
              Dust-resistant outdoor signage tech is more than just a
              convenience. It's a strategic tool that can enhance your outdoor
              marketing efforts. By reducing maintenance needs, it allows you to
              focus more on your core business. <br /> Moreover,
              high-performance signage can improve brand image and customer
              perception. It shows that your business values quality and
              innovation. This can set you apart from competitors. <br />
              However, it's important to align your signage tech with your
              overall marketing strategy. Consider your target audience,
              location, and brand message when choosing your signage. <br /> In
              conclusion, dust-resistant signage tech can be a game-changer for
              your outdoor marketing. It's an investment that can deliver
              significant returns in the long run.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;

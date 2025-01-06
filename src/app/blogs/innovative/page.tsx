"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import "../../Homepage/Homepage.scss";
import Footer from "../../footer/footer";
import innovative1 from "../../../../public/Assets/Blogs/innovative1.png";
import innovative2 from "../../../../public/Assets/Blogs/innovative2.png";
import innovative3 from "../../../../public/Assets/Blogs/innovative3.png";
import innovative4 from "../../../../public/Assets/Blogs/innovative4.jpg";
import innovative5 from "../../../../public/Assets/Blogs/innovative5.jpg";
import innovative6 from "../../../../public/Assets/Blogs/innovative6.jpg";
import innovative7 from "../../../../public/Assets/Blogs/innovative7.jpg";
import innovative8 from "../../../../public/Assets/Blogs/innovative8.png";
import innovative9 from "../../../../public/Assets/Blogs/innovative9.jpg";
import innovative10 from "../../../../public/Assets/Blogs/innovative10.jpg";

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
              Innovative Custom Signage Solutions for Businesses
            </div>
            <div className="project-content">
              In the competitive business landscape, standing out is crucial.
              One effective way to achieve this is through innovative custom
              signage solutions. <br /> Custom signs offer unique branding
              opportunities. They can be tailored to reflect your brand's
              aesthetic and messaging, helping you stand out in a crowded
              marketplace.
            </div>
            <div className="project-image-container">
              <Image src={innovative4} alt="" />
              <div className="image-license-tag">
                by Tyler Franta (https://unsplash.com/@tfrants)
              </div>
            </div>
            <div className="project-content">
              Indoor or outdoor, digital or traditional, custom business signs
              are a critical component of a comprehensive marketing strategy.
              They not only enhance brand visibility but also engage customers
              in a dynamic way. <br /> The design process for custom signs
              involves a collaboration between your business and signage
              experts. This ensures that the final product aligns with your
              brand identity and meets your specific needs. <br /> In this
              article, we will explore the benefits and possibilities of custom
              signage solutions for businesses. We will also delve into the
              latest trends and technologies shaping the signage industry.
              <br />
              Join us as we navigate the world of custom signage solutions and
              discover how they can elevate your brand.
            </div>
            <div className="subheading">
              Understanding Custom Signage Solutions
            </div>
            <div className="project-content">
              Custom signage solutions are more than just visual elements. They
              embody your brand's message and values. By tailoring signs to
              match your brand, you create a cohesive identity that resonates
              with customers. <br /> A multitude of options exists for custom
              signs, from traditional materials to digital displays. This
              versatility allows businesses to choose solutions that best fit
              their goals and budget.
            </div>
            <div className="project-image-container">
              <Image src={innovative5} alt="" />
              <div className="image-license-tag">
                by Nik (https://unsplash.com/@helloimnik)
              </div>
            </div>
            <div className="project-content">
              Advancements in technology and design enable the creation of signs
              that are both innovative and functional. This ensures your brand
              remains impactful and memorable. Understanding these facets is key
              to leveraging signage effectively. Let's explore how these
              solutions contribute to business branding.
            </div>
            <div className="subheading">
              The Role of Signage in Business Branding
            </div>
            <div className="project-content">
              Signage plays a pivotal role in business branding by acting as a
              visual ambassador. Through carefully designed signs, businesses
              reinforce their identity and connect with their audience. A
              well-crafted sign conveys professionalism and attention to detail,
              leaving a lasting impression. It also fosters brand recognition by
              consistently presenting key brand elements.
            </div>
            <div className="subheading">
              The Design Process: Collaboration and Customization
            </div>
            <div className="project-content">
              Creating custom signs involves more than selecting colors and
              fonts. It's a collaborative effort between businesses and skilled
              designers. This collaboration ensures that the signage solution
              aligns with the company's goals and vision. <br /> Customization
              allows businesses to tailor every aspect of their signs, from size
              and shape to material. This level of detail provides a unique
              touch that resonates with target audiences. Working closely with a
              design team, businesses can explore creative options and refine
              their ideas to perfection. This process transforms basic concepts
              into captivating brand expressions.
            </div>
            <div className="subheading">
              The Design Process: Collaboration and Customization
            </div>
            <div className="project-content">
              Custom signs come in various forms to suit different needs. They
              play an essential role in shaping a customer's perception of a
              business. Each type of sign serves a unique purpose. <br /> Some
              common types include: <br /> ⦁ Dimensional Letters <br /> ⦁ LED
              Signs <br /> ⦁ Vehicle Wraps <br /> ⦁ Trade Show Displays <br /> ⦁
              Banner Stands
            </div>
            <div className="project-image-container">
              <Image src={innovative6} alt="" />
              <div className="image-license-tag">
                by Charles Forerunner (https://unsplash.com/@charles_forerunner)
              </div>
            </div>
            <div className="project-content">
              Businesses can choose from options tailored for specific
              environments, enhancing both function and aesthetics. Custom signs
              can be created using a blend of materials and styles for various
              contexts. From sleek digital displays to vibrant window graphics,
              there's a custom sign for every business need.
            </div>
            <div className="subheading">Indoor vs. Outdoor Signage</div>
            <div className="project-content">
              Indoor signs guide customers through spaces and promote products.
              They're often found in retail stores, offices, and restaurants.
              Indoor signs enhance the ambiance and direct customer flow
              effectively.
            </div>
            <div className="project-image-container">
              <Image src={innovative1} alt="" />
              <div className="image-license-tag">
                by Nick Fewings (https://unsplash.com/@jannerboy62)
              </div>
            </div>
            <div className="project-content">
              Outdoor signs, on the other hand, are designed to attract and
              inform passersby. These signs need to be durable and
              weather-resistant. Outdoor signs boost visibility and serve as
              landmarks for your business location.
            </div>
            <div className="subheading">
              Digital and Interactive Signage Options
            </div>
            <div className="project-content">
              Digital signage offers dynamic solutions to engage modern
              audiences. These signs can display changing content and interact
              with customers in real-time. This flexibility makes digital signs
              ideal for constantly changing promotions and event updates.
            </div>
            <div className="project-image-container">
              <Image src={innovative2} alt="" />
              <div className="image-license-tag">
                by Markus Spiske (https://unsplash.com/@markusspiske)
              </div>
            </div>
            <div className="project-content">
              Interactive signage invites customers to engage with your brand
              uniquely. From touchscreens to QR codes, these signs enhance user
              experience. Engaging customers in this manner transforms them from
              passive viewers to active participants. This form of signage is
              particularly effective in tech-savvy markets and environments that
              require frequent updates.
            </div>
            <div className="subheading">
              The Impact of Technology on Signage Solutions
            </div>
            <div className="project-content">
              Technology has transformed signage into a powerful branding tool.
              Innovations enable businesses to create compelling visual
              experiences. These advances make signs more versatile and
              engaging.
            </div>
            <div className="project-image-container">
              <Image src={innovative7} alt="" />
              <div className="image-license-tag">
                by Ryoji Iwata (https://unsplash.com/@ryoji__iwata)
              </div>
            </div>
            <div className="project-content">
              Modern technology integrates digital elements seamlessly into
              signs. This integration allows for dynamic content that captures
              attention. Businesses can update signage quickly, keeping the
              message current and relevant. <br /> Technology also enhances sign
              durability and efficiency. Energy-efficient options, like LED
              signs, reduce environmental impact. They also offer cost savings
              on electricity and maintenance. <br /> With technology, custom
              signage solutions achieve a higher level of precision.
              High-quality printing ensures vibrant and lasting colors. This
              capability supports consistency across all branding materials.
            </div>
            <div className="subheading">
              Advancements in Signage Materials and Production
            </div>
            <div className="project-content">
              Signage materials have seen significant innovations. New materials
              offer increased durability and eco-friendliness. These options
              meet the growing demand for sustainable business practices. <br />
              Advanced production techniques streamline the signage creation
              process. Methods like 3D printing provide intricate designs at
              reduced costs. This technology enables highly customizable signage
              solutions. <br /> Durable materials such as aluminum and acrylic
              withstand harsh weather conditions. These materials ensure
              longevity for outdoor business signs. Thus, businesses enjoy a
              longer return on their signage investment. <br /> Production
              advancements also mean faster turnaround times. Businesses can
              implement campaigns quickly and efficiently. This speed helps in
              maintaining a fresh and relevant brand presence.
            </div>
            <div className="subheading">
              Eco-Friendly and ADA-Compliant Signage
            </div>
            <div className="project-content">
              Eco-friendly signage is essential for sustainability-focused
              businesses. These signs utilize materials such as recycled metals
              and biodegradable plastics. Such options reduce environmental
              impact while maintaining quality and appeal.{" "}
            </div>
            <div className="project-image-container">
              <Image src={innovative8} alt="" />
              {/* <div className="image-license-tag">
                by Ryoji Iwata (https://unsplash.com/@ryoji__iwata)
              </div> */}
            </div>
            <div className="project-content">
              ADA-compliant signs ensure accessibility for all customers. They
              incorporate features like braille and high contrast colors. These
              design elements help in accommodating diverse needs. <br />{" "}
              Combining eco-friendly and ADA features in signage showcases
              social responsibility. Businesses demonstrate their commitment to
              inclusivity and the environment. This approach enhances brand
              reputation among conscious consumers. <br />
              Choosing eco-friendly and ADA-compliant signage supports legal
              compliance. Meeting these standards helps avoid potential
              penalties. Moreover, it fosters an inclusive and welcoming
              atmosphere for everyone.
            </div>
            <div className="subheading">
              Maximizing Visibility and Engagement
            </div>
            <div className="project-content">
              Maximizing visibility is a crucial aspect of effective signage. It
              ensures that potential customers notice and remember your brand.
              Strategic signage placement plays a significant role in
              visibility.
            </div>
            <div className="project-image-container">
              <Image src={innovative3} alt="" />
              <div className="image-license-tag">
                by micheile henderson (https://unsplash.com/@micheile)
              </div>
            </div>
            <div className="project-content">
              Engagement is equally vital in signage design. Signs must capture
              attention and invite interaction or reflection. This encourages
              customers to explore your offerings further. <br /> Combining
              visual appeal with strategic positioning enhances engagement.
              High-traffic areas are ideal for sign placement. This exposure can
              lead to increased customer inquiries. <br /> Custom signage can
              include elements that evoke emotions. A powerful message can be a
              catalyst for customer action. This approach helps in establishing
              a lasting connection with the audience. <br /> An effective sign
              can become more than just a branding tool. It serves as a
              conversation starter, inviting dialogue. This interaction leads to
              a stronger relationship with your brand.
            </div>
            <div className="subheading">
              The Importance of Color, Typography, and Placement
            </div>
            <div className="project-content">
              Colors influence how signs are perceived. They can evoke specific
              emotions and messages. Choosing the right color palette can
              significantly impact brand recognition. <br /> Typography affects
              the readability of your signage. Fonts should be clear and legible
              from a distance. An engaging font choice reflects your brand’s
              personality. <br /> Placement determines how well a sign captures
              attention. Signs at eye level or in high-traffic areas maximize
              visibility. Carefully chosen locations enhance the sign's
              effectiveness. <br /> Well-coordinated color and typography create
              a cohesive brand image. This consistency promotes brand
              recognition and recall. Every design choice should align with the
              brand's values and identity.
            </div>
            <div className="subheading">
              Lighting and Interactive Elements in Signage
            </div>
            <div className="project-content">
              Lighting can transform a sign’s visibility at night. Illuminated
              signs attract attention from afar. LED lighting offers
              energy-efficient options for businesses. <br /> Interactive
              elements add a dynamic aspect to signage. Features like touch
              screens and QR codes engage viewers. They provide additional
              information beyond what static signs offer. <br /> Lighting can
              also highlight specific sign features. This enhances visibility
              and aesthetic appeal. Proper lighting ensures your sign stands out
              around the clock. <br />
              Interactive signage creates personalized experiences. Users engage
              more deeply with the content. This interaction often leads to
              greater brand loyalty and interest. <br /> Incorporating lighting
              and interactive elements adds value. They make the sign functional
              and visually appealing. This combination can differentiate your
              brand in a competitive market.
            </div>
            <div className="subheading">
              The Business Benefits of Custom Signage
            </div>
            <div className="project-content">
              Custom signage offers numerous benefits for businesses. It
              significantly boosts brand visibility and customer awareness. With
              unique designs, businesses can differentiate themselves.{" "}
            </div>
            <div className="project-image-container">
              <Image src={innovative9} alt="" />
              <div className="image-license-tag">
                by Adeolu Eletu (https://unsplash.com/@adeolueletu)
              </div>
            </div>
            <div className="project-content">
              Tailored signs cater to specific marketing goals and aesthetics.
              This targeted approach attracts the right audience more
              effectively. Signage becomes an integral part of the marketing
              strategy. <br /> Custom signs are versatile, suitable for various
              environments. Whether inside or outside, their impact remains
              strong. This adaptability ensures a consistent brand message
              across locations. <br /> Investing in custom signage also enhances
              customer experience. Well-designed signs can guide, inform, and
              engage visitors. This positive interaction increases customer
              satisfaction and brand loyalty.
            </div>
            <div className="subheading">
              Case Studies and ROI of Effective Signage
            </div>
            <div className="project-content">
              Many businesses have seen positive returns from custom signs. A
              retail store improved foot traffic with strategic window displays.
              This led to increased sales and brand recognition. <br /> Another
              example involves a restaurant using digital menus. The dynamic
              content attracted more diners. This shift resulted in higher
              revenue and repeat customers. <br /> Companies investing in LED
              signs have noted energy savings. Reduced costs and increased
              nighttime visibility improved ROI. These signs kept businesses
              visible and vibrant after dark. <br /> Effective signage often
              contributes to a notable ROI. High-quality materials and strategic
              design extend sign longevity. Businesses thus maximize their
              marketing investment over time.
            </div>
            <div className="subheading">Choosing the Right Signage Partner</div>
            <div className="project-content">
              Selecting the right signage partner is crucial for success. They
              should understand your brand's vision and goals. An experienced
              partner can bring innovative ideas to the table.
            </div>
            <div className="project-image-container">
              <Image src={innovative10} alt="" />
              <div className="image-license-tag">
                by Nick Fewings (https://unsplash.com/@jannerboy62)
              </div>
            </div>
            <div className="project-content">
              Research is key when choosing a signage company. Look for reviews
              and testimonials from previous clients. Their past work will speak
              volumes about their capabilities. <br /> Consider partners who
              offer a comprehensive range of services. From design to
              installation, a one-stop shop saves time and ensures consistency.
              This streamlined process simplifies project management. <br /> A
              good signage partner will offer ongoing support. They should be
              available for maintenance and updates. This commitment helps in
              maintaining the effectiveness of your signage long-term.
            </div>
            <div className="subheading">
              The Importance of Professional Design and Installation
            </div>
            <div className="project-content">
              Professional design sets your signs apart. Experts craft signs
              that align with branding and goals. Quality design ensures clarity
              and attractiveness. <br /> Installation is equally vital for
              signage success. Proper placement maximizes visibility and
              effectiveness. Trained installers ensure the sign is safe and
              secure. <br /> Attention to detail during installation is
              critical. It impacts durability and appearance. Poorly installed
              signs can fail prematurely. <br />
              Finally, professional installation can prevent compliance issues.
              Experts understand local regulations and permit requirements. This
              expertise protects your business from potential fines.
            </div>
            <div className="heading">
              Conclusion: Elevating Your Brand with Custom Signage Solutions
            </div>
            <div className="project-content">
              Investing in custom signage is a strategic move for any business.
              It enhances brand visibility and customer engagement. With
              tailored designs, your message reaches the target audience
              effectively. <br /> By choosing innovative signage solutions, your
              business stands out. It reflects your commitment to quality and
              professionalism. This distinction can lead to increased customer
              trust and loyalty. <br /> Partnering with the right signage
              experts ensures success. They bring expertise and creativity to
              every project. With their help, custom signage can transform your
              brand presence.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;

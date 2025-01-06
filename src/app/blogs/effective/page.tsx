"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../../../public/Assets/1source.jpg";
import { useRouter } from "next/navigation";
import "../../Homepage/Homepage.scss";
import Footer from "../../footer/footer";
import effective1 from "../../../../public/Assets/Blogs/effective1.png";
import effective2 from "../../../../public/Assets/Blogs/effective2.png";
import effective3 from "../../../../public/Assets/Blogs/effective3.png";
import effective4 from "../../../../public/Assets/Blogs/effective 4.png";
import effective5 from "../../../../public/Assets/Blogs/effective5.png";

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
              Effective Signage Strategies for University Campuses
            </div>
            <div className="project-content">
              Navigating a university campus can be a daunting task. Especially
              for new students, visitors, or during large events. Effective
              signage plays a crucial role in making this task easier.
            </div>
            <div className="project-image-container">
              <Image src={effective1} alt="" />
              <div className="image-license-tag">
                by Nick Fewings (https://unsplash.com/@jannerboy62)
              </div>
            </div>
            <div className="project-content">
              Signage for universities is more than just directional aids. It
              reflects the institution's brand, communicates its values, and
              enhances safety. It's a silent guide, leading the way and
              providing necessary information. <br /> From emergency signage to
              room identification signs, each has a unique role. They
              collectively contribute to a seamless campus experience. But
              creating effective signage is not a simple task. <br /> It
              requires strategic planning, thoughtful design, and regular
              maintenance. It also needs to be inclusive, accessible, and
              compliant with regulations. This article will delve into these
              aspects, providing actionable insights for university
              administrators and facility managers. <br /> Join us as we explore
              effective signage strategies for university campuses. Let's
              enhance navigation, safety, and communication within the
              university environment together.
            </div>
            <div className="subheading">
              The Role of Signage in University Environments
            </div>
            <div className="project-content">
              Signage is critical in shaping the campus experience. It creates a
              welcoming environment by guiding students and visitors seamlessly
              through vast university grounds. Effective signs significantly
              impact a person's first impression of a campus, often influencing
              their perception of the institution. <br /> Moreover, signage
              reflects a university's brand and values. It provides clear
              navigation and disseminates important information, helping to
              maintain a safe and orderly environment. Wayfinding signage, for
              instance, reduces confusion and enhances the visitor experience,
              reinforcing a sense of security and belonging throughout the
              campus community.
            </div>
            <div className="subheading">Types of Signage on Campus</div>
            <div className="project-content">
              Universities require diverse signage to enhance navigation and
              communication. Each type addresses specific needs on the campus. A
              well-planned signage system improves the usability and safety of
              university spaces. <br /> Key types of signage include: <br /> ⦁
              Wayfinding Signage: Directs and guides through pathways. <br /> ⦁
              Emergency Signage: Ensures safety in urgent situations. <br /> ⦁
              Informational Signs: Communicate essential information. <br /> ⦁
              Room Identification Signage: Identifies buildings and rooms.{" "}
              <br /> ⦁ Event Signage: Promotes and guides campus events. The
              proper integration of these signs improves the overall campus
              experience. They play a crucial role in streamlining the flow of
              students, staff, and visitors, enhancing the campus environment's
              effectiveness and appeal.
            </div>
            <div className="project-image-container">
              <Image src={effective2} alt="" />
              <div className="image-license-tag">
                by Gabriella Clare Marino (https://unsplash.com/@gabiontheroad)
              </div>
            </div>
            <div className="subheading">Wayfinding Signage</div>
            <div className="project-content">
              Wayfinding signage assists in navigation across expansive
              university campuses. It points out routes, landmarks, and building
              entrances, helping individuals find their way with ease. These
              signs are essential for reducing confusion and stress, especially
              for new visitors and students. <br /> Universities benefit greatly
              from well-placed wayfinding signs. They make large campuses feel
              more approachable and less intimidating. This signage fosters a
              welcoming experience, making it easier for everyone to navigate
              paths and corridors.
            </div>
            <div className="subheading">Emergency Signage</div>
            <div className="project-content">
              Emergency signage plays a vital role in university safety
              protocols. These signs are designed for quick visibility and
              clarity during critical situations. They guide individuals to
              safety by indicating emergency exits, fire extinguishers, and
              first aid locations. <br /> Effective emergency signage ensures a
              safe environment for all campus occupants. Institutions must
              ensure these signs meet regulatory standards for visibility and
              placement. In times of crisis, well-marked emergency signage can
              mean the difference between chaos and calm evacuation.
            </div>
            <div className="subheading">Informational Signs</div>
            <div className="project-content">
              Informational signs disseminate useful details across campus.
              These can include campus maps, directional aids, and codes of
              conduct. Informational signage helps in communicating rules,
              services, or schedules, informing both students and visitors.{" "}
              <br />
              These signs are fundamental for day-to-day operations within the
              university. By conveying necessary information efficiently, they
              support the smooth functioning of campus activities and
              interactions. Clear informational signage reduces
              misunderstandings and helps set the right expectations.
            </div>
            <div className="subheading">Room Identification Signage</div>
            <div className="project-content">
              Room identification signage helps in locating specific areas, such
              as classrooms, offices, and labs. These signs are crucial for
              navigating buildings and finding precise locations quickly. This
              type of signage aids both faculty and students in maximizing their
              time on campus. <br /> Such signage maintains an organized
              environment by clearly identifying areas of interest. Room
              identification is a practical solution that enhances efficiency
              and decreases time spent searching for rooms, thus improving
              productivity and punctuality.
            </div>
            <div className="subheading">Event Signage</div>
            <div className="project-content">
              Event signage is integral to the promotion and execution of campus
              activities. It guides attendees to events while displaying
              schedules and locations. These signs play a key role in fostering
              community engagement and participation within the university.{" "}
              <br /> They highlight and advertise upcoming events such as
              seminars, sports, and social gatherings. Well-designed event
              signage not only draws attention but also ensures that events are
              accessible and well-attended
            </div>
            <div className="heading">Designing Effective Campus Signage</div>
            <div className="project-content">
              Designing campus signage requires a blend of functionality and
              creativity. Effective signage systems prioritize visibility,
              accessibility, and durability to serve their purpose. Universities
              should focus on these elements to create an intuitive and
              efficient navigation network. <br /> Materials used must withstand
              diverse weather conditions, ensuring signs remain legible over
              time. A well-thought-out design fosters better interaction between
              the community and the physical space of the campus.
            </div>
            <div className="project-image-container">
              <Image src={effective3} alt="" />
              <div className="image-license-tag">
                by micheile henderson (https://unsplash.com/@micheile)
              </div>
            </div>
            <div className="subheading">Visibility and Accessibility</div>
            <div className="project-content">
              Signage visibility is crucial in ensuring effectiveness. The use
              of high-contrast colors and clear fonts enhances readability from
              a distance. Proper lighting, both natural and artificial, is
              necessary for nighttime visibility. <br /> Accessibility considers
              the diverse needs of users, including those with disabilities.
              This involves placing signs within reachable heights and
              incorporating tactile elements like braille for inclusiveness.
            </div>
            <div className="subheading">Consistency and Branding</div>
            <div className="project-content">
              University signage should reflect a unified brand. Consistent
              design elements, like logos, fonts, and colors, reinforce the
              institution's identity across all signs. This consistency aids in
              recognition and helps maintain a cohesive visual environment.{" "}
              <br />
              Branded signage contributes to the university's reputation and
              image. It communicates professionalism and attention to detail,
              both of which are important to students, staff, and visitors.
              Uniformity in design supports a well-organized campus appearance.
            </div>
            <div className="subheading">ADA Compliance and Inclusivity</div>
            <div className="project-content">
              Ensuring ADA compliance in signage design is not just a legal
              requirement but a moral one. ADA-compliant signs must include
              braille and contrasting colors for visibility by visually impaired
              individuals. <br /> Universities should strive for inclusivity in
              all signage. This means considering bilingual or multilingual text
              where necessary to accommodate non-native speakers. Such efforts
              enhance accessibility and demonstrate an institution's commitment
              to diversity.
            </div>
            <div className="heading">
              Integrating Technology with Traditional Signage
            </div>
            <div className="project-content">
              Modern campuses benefit from combining traditional signage with
              technology. This integration enhances communication and user
              experience. Digital solutions provide dynamic content, while
              traditional signs offer reliable, static information. <br /> The
              fusion of these elements fosters adaptability, enabling
              universities to update content seamlessly. This approach supports
              both immediate needs and long-term strategic goals, contributing
              to a smarter campus environment.
            </div>
            <div className="project-image-container">
              <Image src={effective4} alt="" />
              <div className="image-license-tag">
                by Marius Masalar (https://unsplash.com/@marius)
              </div>
            </div>
            <div className="subheading">
              Digital Signage and Real-Time Updates
            </div>
            <div className="project-content">
              Digital signage offers flexibility and immediacy that static signs
              cannot. Universities can display real-time updates about events or
              emergency alerts across campus. This technology aids in quickly
              disseminating important information to students and staff. <br />{" "}
              The ability to change content at a moment's notice ensures
              messages remain relevant. This adaptability is essential for
              managing daily operations and enhancing campus communication.
            </div>
            <div className="subheading">Interactive Maps and QR Codes</div>
            <div className="project-content">
              Interactive maps guide visitors in navigating complex campus
              layouts. They provide an engaging wayfinding experience that
              static signs often lack. Users can access real-time directions and
              information on their devices. <br /> QR codes serve as a bridge
              between physical and digital realms. Scanning a code can unlock
              additional resources, such as video guides or webpages. These
              tools enhance accessibility and user interaction, making
              navigation more intuitive.
            </div>
            <div className="heading">
              Maintenance and Upkeep of Signage Systems
            </div>
            <div className="project-content">
              Efficient signage requires regular care and attention. A
              well-maintained system ensures clear communication and a positive
              campus experience. Without proper upkeep, signs can become
              outdated or damaged, reducing their effectiveness. <br />{" "}
              Maintenance involves both proactive and reactive measures.
              Proactive strategies, like scheduling regular checks, prevent
              issues before they arise. Meanwhile, reactive approaches address
              problems as they occur, such as repairing vandalized signs or
              updating faded graphics. This combination keeps signage in
              excellent condition, serving its purpose effectively.
            </div>
            <div className="subheading">Regular Signage Audits</div>
            <div className="project-content">
              Conducting periodic signage audits is crucial for maintaining a
              functional system. These audits assess the condition, visibility,
              and relevance of signs across campus. Identifying issues early
              helps in addressing them before they impact users. <br /> Audits
              also provide insights into potential improvements or changes. They
              highlight areas where signage may not meet current needs or
              standards. By reviewing signs regularly, universities can ensure
              they are always effective and up to date.
            </div>
            <div className="subheading">Updating and Replacing Signs</div>
            <div className="project-content">
              Updating and Replacing Signs Updating signage is key to
              maintaining its relevance and usability. University environments
              change over time, and signs must reflect these changes accurately.
              Outdated signs can lead to confusion or misinformation. <br />{" "}
              Replacing signs is necessary when they become damaged or when
              changes occur, such as new campus buildings or altered routes.
              Regular updates ensure that signage remains aligned with the
              university's evolving needs. This ongoing process keeps campus
              information current and accessible to all visitors.
            </div>
            <div className="heading">
              Case Studies: Successful Signage Implementation
            </div>
            <div className="project-content">
              Several universities have excelled in creating effective signage
              systems. These institutions serve as models for others looking to
              enhance campus communication and navigation. <br /> One such
              example is a university that integrated technology into its
              signage. By implementing digital displays, the university offered
              real-time updates and interactive elements for visitors. This
              approach not only improved wayfinding but also enhanced user
              engagement.
            </div>
            <div className="project-image-container">
              <Image src={effective5} alt="" />
              <div className="image-license-tag">
                by Nick Fewings (https://unsplash.com/@jannerboy62)
              </div>
            </div>
            <div className="project-content">
              Another successful case involves a campus that adopted a
              consistent branding strategy across all signs. They utilized
              cohesive design elements, which helped reinforce the university's
              identity. This consistency ensured that every sign was easily
              recognizable, contributing to a seamless campus experience. By
              studying these examples, other universities can learn valuable
              lessons in creating impactful and efficient signage.
            </div>
            <div className="heading">
              Conclusion: Enhancing the Campus Experience Through Signage
            </div>
            <div className="project-content">
              Signage plays a crucial role in shaping the university
              environment. Well-designed signage systems not only improve safety
              and navigation but also reinforce the campus brand. Effective
              signage strategies enhance communication and create a welcoming
              atmosphere. By investing in comprehensive signage plans,
              universities can significantly improve the experience for both
              students and visitors. Prioritizing these strategies supports a
              cohesive and inclusive campus culture.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;

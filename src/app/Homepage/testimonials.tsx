"use client";
import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import Image from "next/image";
import img1 from "../../../public/Assets/products/testimonial.jpg";
import icon from "../../../public/Assets/rwatermark.png";

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimSpeed = 4500;

  const testimContent = [
    {
      name: "Ryan Penny",
      text: "Incredible!!! Called Michigan Custom Signs this morning needing 33 signs and they were able to print and have everything ready to go before 5pm!!!!! Great quality, great service and worth every penny!",
    },
    {
      name: "Donald Bleuenstein",
      text: "Greatly helpful in design and layout of 5 signs (interior and exterior) for a new office space. Priced right, professionally installed and great communication. Thank you!",
    },
    {
      name: "Jade Vickery",
      text: "Would give 6 stars if I could. This company was amazing to work with, very responsive, kind and genuinely willing to help. Ask for Emily, she's the best!!",
    },
    {
      name: "Ben McDaniel",
      text: "Great customer service from start to finish!! Final products are amazing....everything just pops!! I will be a return customer!",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimContent.length);
    }, testimSpeed);

    return () => clearInterval(intervalId);
  });

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  const handleArrowClick = (direction: any) => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = direction === "left" ? prevSlide - 1 : prevSlide + 1;
      return nextSlide < 0
        ? testimContent.length - 1
        : nextSlide % testimContent.length;
    });
  };

  return (
    <>
      <div className="mobilespace"></div>
      <div className="mobilespace"></div>
      <div className="mobilespace"></div>
      <div className="mobilespace"></div>
      <div className="mobilespace"></div>
      <div className="testimonial-main-container">
        <a className="Customer-Review-btn" href="/review">
          <div className="icon">
            <Image src={icon} alt="service area icon" />
          </div>
          <span>Customer reviews</span>
        </a>

        <div className="testimonial-container">
          <div className="testimonial-image-container">
            <div className="card-shadow">
              <div className="testimonial-image">
                <Image src={img1} alt="testimonial banner image" />
              </div>
            </div>
          </div>
          <div className="testimonial-content-container">
            <section id="testim" className="testim">
              <div className="testim-cover">
                <div className="wrap">
                  <span
                    onClick={() => handleArrowClick("left")}
                    className="arrow left fa fa-chevron-left"
                  ></span>
                  <span
                    onClick={() => handleArrowClick("right")}
                    className="arrow right fa fa-chevron-right"
                  ></span>

                  <ul id="testim-dots" className="dots">
                    {testimContent.map((_, index) => (
                      <li
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`dot ${
                          index === currentSlide ? "active" : ""
                        }`}
                      ></li>
                    ))}
                  </ul>

                  <div id="testim-content" className="cont">
                    {testimContent.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`testim-slide ${
                          index === currentSlide ? "active" : "inactive"
                        }`}
                      >
                        <h2>- {testimonial.name}</h2>
                        <p>{testimonial.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;

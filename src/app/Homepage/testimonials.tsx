"use client";
import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import Image from "next/image";
import img1 from "../../../public/Assets/download.jpg";

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimSpeed = 4500;

  const testimContent = [
    {
      img: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg",
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://timesofindia.indiatimes.com/thumb/msid-75752690,width-800,height-600,resizemode-4/75752690.jpg",
      name: "Mr. Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://p16.muscdn.com/img/musically-maliva-obj/1627333501517830~c5_720x720.jpeg",
      name: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1666413671597057.jpeg",
      name: "Lorem De Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKLJe1Lrz2N3ufVSwQokSJ79jGBbIptXuVnsdxMmNUlE14ohwp&usqp=CAU",
      name: "Ms. Lorem R. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
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
      <div className="testimonial-main-container">
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
                        {/* <div className="img">
                          <img src={testimonial.img} alt={testimonial.name} />
                        </div> */}
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
      <div className="space"></div>
    </>
  );
}

export default Testimonials;

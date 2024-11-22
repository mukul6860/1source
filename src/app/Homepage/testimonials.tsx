import React from "react";
import "./Homepage.scss";
import Image from "next/image";
import img1 from "../../../public/Assets/download.jpg";

function testimonials() {
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
          <div className="testimonial-content-container"></div>
        </div>
      </div>
    </>
  );
}

export default testimonials;

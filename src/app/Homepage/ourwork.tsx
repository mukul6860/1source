import React from "react";
import "./Homepage.scss";
function OurworkContainer() {
  return (
    <>
      <div className="ourwork-cotainer">
        <div className="ourwork-tag">What We Offer</div>
        <div className="underline"></div>
        <div className="ourwork-card-cotainer">
          <div className="ourwork-card">
            <div className="ourwork-card-content">Interior Signage</div>
          </div>
          <div className="ourwork-card">
            <div className="ourwork-card-content">Exterior Signage</div>
          </div>
          <div className="ourwork-card">
            <div className="ourwork-card-content">Vehicle Wraps</div>
          </div>
          <div className="ourwork-card">
            <div className="ourwork-card-content">Custom Signs</div>
          </div>
          <div className="ourwork-card">
            <div className="ourwork-card-content">Dimensional Letters</div>
          </div>
          <div className="ourwork-card">
            <div className="ourwork-card-content">Lit and Unlit Signs</div>
          </div>
          <div className="ourwork-card">
            <div className="ourwork-card-content">
              Trade show displays or booths
            </div>
          </div>
          <div className="ourwork-card">
            <div className="ourwork-card-content">Service</div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default OurworkContainer;

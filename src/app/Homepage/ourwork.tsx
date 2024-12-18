"use client";
import React from "react";
// import "./Homepage.scss";

function OurWork() {
  return (
    <>
      <div className="ourwork-container">
        <div className="ourwork-tag">What We Offer</div>
        <div className="underline"></div>
        <div className="ourwork-scroll-wrapper">
          <div className="ourwork-card-container">
            <div className="ourwork-card bg1">
              <div className="ourwork-card-content">Interior Signage</div>
            </div>
            <div className="ourwork-card bg2">
              <div className="ourwork-card-content">Exterior Signage</div>
            </div>
            <div className="ourwork-card bg3">
              <div className="ourwork-card-content">Vehicle Wraps</div>
            </div>
            <div className="ourwork-card bg4">
              <div className="ourwork-card-content">Custom Signs</div>
            </div>
            <div className="ourwork-card bg5">
              <div className="ourwork-card-content">Dimensional Letters</div>
            </div>
            <div className="ourwork-card bg6">
              <div className="ourwork-card-content">Lit and Unlit Signs</div>
            </div>
            <div className="ourwork-card bg7">
              <div className="ourwork-card-content">
                Trade show displays or booths
              </div>
            </div>
            <div className="ourwork-card bg8">
              <div className="ourwork-card-content">Service</div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default OurWork;

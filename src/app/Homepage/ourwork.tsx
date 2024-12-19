"use client";
import React from "react";
// import "./Homepage.scss";

function OurWork() {
  return (
    <>
      <div className="ourwork-container">
        <div className="ourwork-tag">What we offer</div>
        <div className="underline"></div>
        <div className="ourwork-scroll-wrapper">
          <div className="ourwork-card-container">
            <div className="ourwork-card bg1">
              <div className="ourwork-card-content">Interior signage</div>
            </div>
            <div className="ourwork-card bg2">
              <div className="ourwork-card-content">Exterior signage</div>
            </div>
            <div className="ourwork-card bg3">
              <div className="ourwork-card-content">Vehicle wraps</div>
            </div>
            <div className="ourwork-card bg4">
              <div className="ourwork-card-content">Custom signs</div>
            </div>
            <div className="ourwork-card bg5">
              <div className="ourwork-card-content">Dimensional letters</div>
            </div>
            <div className="ourwork-card bg6">
              <div className="ourwork-card-content">Lit and unlit signs</div>
            </div>
            <div className="ourwork-card bg7">
              <div className="ourwork-card-content">
                Trade show displays or booths
              </div>
            </div>
            <div className="ourwork-card bg8">
              <div className="ourwork-card-content">Services</div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default OurWork;

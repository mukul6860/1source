"use client";
import Link from "next/link";
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
            <Link className="ourwork-card bg1" href="/portfolio">
              <div className="ourwork-card-content">Interior signs</div>
            </Link>
            <Link className="ourwork-card bg2" href="/portfolio">
              <div className="ourwork-card-content">Exterior signs</div>
            </Link>
            <Link className="ourwork-card bg3" href="/portfolio">
              <div className="ourwork-card-content">Vehicle wraps</div>
            </Link>
            <Link className="ourwork-card bg4" href="/portfolio">
              <div className="ourwork-card-content">Custom signs</div>
            </Link>
            <Link className="ourwork-card bg5" href="/portfolio">
              <div className="ourwork-card-content">Dimensional letters</div>
            </Link>
            <Link className="ourwork-card bg6" href="/portfolio">
              <div className="ourwork-card-content">Lit and unlit signs</div>
            </Link>
            <Link className="ourwork-card bg7" href="/portfolio">
              <div className="ourwork-card-content">
                Trade show displays or booths
              </div>
            </Link>
            <Link className="ourwork-card bg8" href="/portfolio">
              <div className="ourwork-card-content">Services</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default OurWork;

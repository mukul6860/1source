"use client";
import { useRef, useState, useEffect } from "react";
// import "./Homepage.scss";

function AiOutlineRightCircle() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
    >
      <path d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z" />
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
    </svg>
  );
}

function AiOutlineLeftCircle() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
    >
      <path d="M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z" />
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
    </svg>
  );
}

function OurWork() {
  const scrollContainerRef = useRef<any>(null);

  // Automatically scroll the cards
  const scrollAutomatically = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const scrollAmount = 300;
      const newScrollLeft =
        scrollLeft + scrollAmount > scrollWidth - clientWidth
          ? 0
          : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Start automatic scrolling when component mounts
  useEffect(() => {
    const interval = setInterval(scrollAutomatically, 3000); // Scroll every 3 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  // Function to scroll manually
  const scroll = (direction: any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="ourwork-container">
        <div className="ourwork-tag">What We Offer</div>
        <div className="underline"></div>
        <div className="ourwork-scroll-wrapper">
          <div className="ourwork-card-container" ref={scrollContainerRef}>
            <button
              className="scroll-arrow-left"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <AiOutlineLeftCircle />
            </button>
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
            <button
              className="scroll-arrow-right"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <AiOutlineRightCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

export default OurWork;

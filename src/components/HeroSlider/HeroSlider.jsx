import React, { useState, useEffect } from "react";
import "./HeroSlider.css";
import slides from "./slider-content";

import ButtonRight from "/assets/angle-right.svg";
import ButtonLeft from "/assets/angle-left.svg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimated, setisAnimated] = useState(false);

  useEffect(() => {
      setisAnimated(true);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setisAnimated(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    setisAnimated(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="slider__wrapper">
      <button className="slider__left-button" onClick={prevSlide}>
        <img src={ButtonLeft} alt="" />
      </button>
      <div key={currentSlide} className={`slider__slide ${isAnimated ? "animated" : ""}`}>
        <h1>{currentSlideData.description}</h1>
      </div>
      <button className="slider__right-button" onClick={nextSlide}>
        <img src={ButtonRight} alt="" />
      </button>
    </div>
  );
};

export default HeroSlider;

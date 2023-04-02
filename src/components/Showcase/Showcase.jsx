import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./showcase.css";
import sliderData from "./slider-data";

const Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="Showcase">
      <div className="nav">
        <div className="previous">
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        </div>
        <div className="nxt">
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        </div>
      </div>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="final">
                <div className="image">
                  <img src={slide.imager} alt="" className="images" />
                </div>
                <div className="text">
                  <div className="title">
                    <div className="top">
                      <div className="one">
                        <h4>{slide.heading}</h4>
                      </div>
                      <div className="two">
                        <h4>Collection</h4>
                        <div class="factors">
                          <div class="factor" id="line"></div>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      <p>{slide.desc}</p>
                    </div>
                  </div>
                  <div className="button">
                    <button type="button">Explore</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Showcase;

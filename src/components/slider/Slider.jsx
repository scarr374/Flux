import React from "react";
import "./slider.css";
import Marquee from "react-fast-marquee";
import { galaxy, gmt, flowers, manus } from "./import";

const Slider = () => {
  return (
    <div className="branding">
      <div className="marquee">
        <Marquee>
          <a className="image galaxy">
            <img src={galaxy} alt="Galaxy" />
          </a>
          <a className="image flowers">
            <img src={flowers} alt="Flowers" />
          </a>
          <a className="image gmt">
            <img src={gmt} alt="gmt" />
          </a>
          <a className="image manus">
            <img src={manus} alt="hand" />
          </a>
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;

import React from "react";
import "./services.css";
import { transport, gift, support, card } from "./imports.js";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={transport} />
        <div className="text">
          <h5>Free Shipping</h5>
          <p>All your orders over $100</p>
        </div>
      </div>
      <div className="service">
        <img src={gift} />
        <div className="text">
          <h5>Daily Suprise Offers</h5>
          <p>Save up to 25% off</p>
        </div>
      </div>
      <div className="service">
        <img src={support} />
        <div className="text">
          <h5>Support 24/7</h5>
          <p>Support with an expert</p>
        </div>
      </div>
      <div className="service">
        <img src={card} />
        <div className="">
          <h5>Secure Payments</h5>
          <p>100% Protected Payments</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

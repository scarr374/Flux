import React from "react";
import "./brand.css";
import { google, dropbox, atlassian, shopify, slack } from "./emports.js";

const Brand = () => {
  return (
    <div className="branding">
      <div className="brand">
        <a href="#">
          <img src={shopify} alt="shopify" />
        </a>
        <a href="#">
          <img src={dropbox} alt="dropbox" />
        </a>
        <a href="#">
          <img src={google} alt="google" />
        </a>
        <a href="#">
          <img src={slack} alt="slack" />
        </a>
        <a href="#">
          <img src={atlassian} alt="atlassian" />
        </a>
      </div>
    </div>
  );
};

export default Brand;

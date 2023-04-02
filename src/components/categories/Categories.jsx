import React from "react";
import "./categories.css";
import { NavLink } from "react-router-dom";
import {
  collections,
  women,
  men,
  category2,
  category3,
  rename,
  shoe2,
} from "./import.js";

const Categories = () => {
  return (
    <div className="box">
      <div className="category first">
        <img src={collections} />
        <div className="text">
          <span>
            <NavLink to="/collections">Collections</NavLink>
          </span>
        </div>
      </div>
      <div className="second">
        <div className="category top">
          <img src={category3} />
          <div className="text">
            <span>
              <NavLink to="/Products/women">Women</NavLink>
            </span>
          </div>
        </div>
        <div className="bottam">
          <div className="category left">
            <img src={men} />
            <div className="text">
              <span>Lifestyle</span>
            </div>
          </div>
          <div className="category right">
            <img src={women} />
            <div className="text">
              <span>Stories</span>
            </div>
          </div>
        </div>
      </div>
      <div className="category third">
        <img src={rename} />
        <div className="text">
          <span>
            <NavLink to="/Products/men">Men</NavLink>
          </span>
        </div>
      </div>
      <div className="fourth">
        <div className="heading">
          <h1>CATEGORY</h1>
        </div>
        <div className="image">
          <div className="category left">
            <img src={shoe2} />
            <div className="text">
              <span>Accessories</span>
            </div>
          </div>
          <div className="category right">
            <img src={category2} />
            <div className="text">
              <span>Trending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

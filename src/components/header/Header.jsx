import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-hd">
      <div class="small-header">
        <p>Free Shipping Over $100</p>
        <div class="contact">
          <p>Call Us:</p>
          <a href="tel:+233 544061673">+233 544061673</a>
        </div>
      </div>
      <Navbar />
      <div className="bottom">
        <div className="left">
          <div className="yes">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
              >
                <span>
                  <NavLink to="">Home</NavLink>
                </span>
                <div className="arrow">
                  <BsFillCaretDownFill />
                </div>
              </button>
            </div>
          </div>
          <div className="menu-links">
            <a href="#">
              <NavLink to="/Products/store">Store</NavLink>
            </a>
            <a href="#">
              <NavLink to="/Products/men">Men</NavLink>
            </a>
            <a href="#">
              <NavLink to="/Products/women">Women</NavLink>
            </a>
            <a href="#">
              <NavLink to="/blogs">Blog</NavLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

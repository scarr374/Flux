import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo, search, favorites } from "./imports.js";
import hanger from "../../assets/icons/icons8-clothes-hanger-48.png";
import cart from "../../assets/icons/icons8-shopping-cart-24.png";

const Menu = () => (
  <div className="menu">
    <div className="menu-item collection">
      <div className="text">
        <p>
          <a href="#">
            <NavLink to="/Collections">Collections</NavLink>
          </a>
        </p>
      </div>
    </div>
    <div className="menu-item closet">
      <NavLink to="/Closet" className="item closets">
        <div className="image">
          <img src={hanger} alt="closet" />
        </div>
        <div className="text">
          <p>
            <a href="#">closet</a>
          </p>
        </div>
      </NavLink>
    </div>
    <div className="menu-item favorite">
      <NavLink to="/Wishlist" className="item">
        <div className="image">
          <img src={favorites} alt="favorites" />
        </div>
        <div className="text">
          <p>
            <a href="#">wishlist</a>
          </p>
        </div>
      </NavLink>
    </div>
    <div className="menu-item cart">
      <NavLink to="/Cart" className="item cartt">
        <div className="image">
          <img src={cart} alt="cart" />
          <span>0</span>
        </div>
        <div className="text">
          <p>
            <a href="#">cart</a>
          </p>
        </div>
      </NavLink>
    </div>
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="top">
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
                <div className="navbar-menu-sign">
                  <p>
                    <a href="../../login/login.jsx">Log in</a>
                  </p>
                  <button type="button">
                    <a href="#">Sign up</a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <p className="logo-name">
            <a href="#">
              <NavLink to="/">Flux</NavLink>
            </a>
          </p>
        </div>
        <div className="search">
          <div className="bar">
            <input type="text" placeholder="Search Product here..." />
          </div>
          <button className="search-btn">
            <img src={search} alt="search botton" />
          </button>
        </div>
        <div className="navbar-sign">
          <div className="links">
            <Menu />
          </div>
          <div className="login">
            <p>
              <a href="#">
                <NavLink to="/login">Login</NavLink>
              </a>
            </p>
            <button type="button">
              <a href="#">
                <NavLink to="/signup">Sign up</NavLink>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

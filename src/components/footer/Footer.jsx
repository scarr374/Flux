import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { RiArrowUpSLine } from "react-icons/ri";
import {
  newsletter,
  facebookb,
  pinterest,
  twitter,
  instagram,
  tiktok,
  mastercard,
  paypal,
  visa,
  googleplay,
  appstore,
} from "./imports.js";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="section">
        <div className="top">
          <div className="text">
            <img src={newsletter} alt="newletter" />
            <h2>Sign Up for Newsletter</h2>
          </div>
          <div className="email">
            <input type="email" placeholder="Your email address..." />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="middle">
          <div className="row">
            <div className="coll col-4">
              <h4>Contact Us</h4>
              <div className="footer-links">
                <address>
                  Hno: 277 Near Vill chapel, <br />
                  Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a href="tel:+233 544061673">+233 544061673</a>
                <a href="mailto: sedemboafo@gmail.com">sedemboafo@gmail.com</a>
                <div className="social_icons">
                  <a href="">
                    <img src={facebookb} alt="facebook" />
                  </a>
                  <a href="">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="https://www.instagram.com/optimus_trilla/">
                    <img src={instagram} alt="youtube" />
                  </a>
                  <a href="">
                    <img src={tiktok} alt="tiktok" />
                  </a>
                  <a href="">
                    <img src={pinterest} alt="pinterest" />
                  </a>
                </div>
              </div>
            </div>
            <div className="coll col-3">
              <h4>Information</h4>
              <div className="footer-links">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">
                  <NavLink to="/blogs">Blog</NavLink>
                </a>
                <a href="#">Refund Policy</a>
              </div>
            </div>
            <div className="coll col-2">
              <h4>Account</h4>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Faq</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="coll col-5">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <a href="#">Shoes</a>
                <a href="#">Watches</a>
                <a href="#">Hoodies</a>
                <a href="#">Shirts</a>
                <a href="#">Bags</a>
              </div>
            </div>
            <div className="coll col-1">
              <h4 className="ttl">Our App</h4>
              <div className="footer-links">
                <p>
                  Download our App and get extra 15% discount <br /> on your
                  first Order..
                </p>
                <div className="linkss">
                  <a className="symbols google-play" href="#">
                    <img src={googleplay} alt="play store" />
                    <div className="text">
                      <p>Get it on</p>
                      <h4>Google play</h4>
                    </div>
                  </a>
                  <a className="symbols app-store" href="#">
                    <img src={appstore} alt="app store" />
                    <div className="text">
                      <p>Download on the</p>
                      <h4>App Store</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="signature">
            <p>&copy; 2023; Powered by D3v. Labs</p>
          </div>
          <div className="right">
            <div className="card-payment">
              <img className="visa" src={visa} alt="visa" />
              <img className="paypal" src={paypal} alt="paypal" />
              <img className="mastercard" src={mastercard} alt="mastercard" />
            </div>
            <div className="return-top">
              <button>
                <a href="#">
                  <RiArrowUpSLine />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

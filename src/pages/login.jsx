import React from "react";
import ".//styles/login.css";
import { NavLink } from "react-router-dom";
import { logo, facebook, google, mail, lock, phone } from "./imports/login";

const Login = () => {
  return (
    <div className="body">
      <div className="centered">
        <div className="head">
          <h1>Login</h1>
        </div>
        <div className="logbox">
          <NavLink to="/" className="upper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="name">
              <h3>Flux</h3>
            </div>
          </NavLink>
          <div className="mid">
            <div className="email inputs">
              <input type="email" placeholder="Email" />
              <img src={mail} alt="mail" />
            </div>
            <div className="password inputs">
              <input type="password" placeholder="Password" />
              <img src={lock} alt="password" />
            </div>
          </div>
          <div className="lower">
            <div className="remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div className="loged">
              <button type="button">
                <p>Login</p>
              </button>
            </div>
            <div className="fogot">
              <NavLink to="/">
                <p>Forgot password?</p>
              </NavLink>
            </div>
            <NavLink className="register">
              <p>Register</p>
            </NavLink>
          </div>
        </div>
        <div className="socials">
          <div className="tle">
            <p>Or?</p>
          </div>
          <div className="slinks">
            <div className="facebook method">
              <div className="image">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="text">acebook</div>
            </div>
            <div className="google method">
              <div className="image">
                <img src={google} alt="google" />
              </div>
              <div className="text">oogle</div>
            </div>
            <div className="phone method">
              <div className="image">
                <img src={phone} alt="phone" />
              </div>
              <div className="text">Phone</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

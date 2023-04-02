import React from "react";
import "./suggest.css";
import { main, main1, main2 } from "./imports.js";
import { NavLink } from "react-router-dom";

const Suggest = () => {
  return (
    <div className="suggest">
      <div className="bottom">
        <div className="card">
          <div className="image">
            <img src={main} />
          </div>
          <div className="text">
            <div className="top">
              <div className="date">11/02/23</div>
              <div className="button">
                <NavLink to="/blog/1">
                  <button type="button">Read</button>
                </NavLink>
              </div>
            </div>
            <div className="little">
              <p>
                Incorporate fashion trends into your everyday wardrobe and
                translate runway looks into wearable styles.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={main1} />
          </div>
          <div className="text">
            <div className="top">
              <div className="date">11/02/23</div>
              <div className="button">
                <NavLink to="/blog/2">
                  <button type="button">Read</button>
                </NavLink>
              </div>
            </div>
            <div className="little">
              <p>
                Get updated on the latest styles and hottest trends in fashion,
                from clothing to accessories
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={main2} />
          </div>
          <div className="text">
            <div className="top">
              <div className="date">11/02/23</div>
              <div className="button">
                <NavLink to="/blog/3">
                  <button type="button">Read</button>
                </NavLink>
              </div>
            </div>
            <div className="little">
              <p>
                Discover the world's best street looks, featuring photographs
                and commentary on the newest fashion trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;

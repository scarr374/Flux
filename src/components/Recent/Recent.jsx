import React from "react";
import "./recent.css";
import {
  recent1,
  recent2,
  recent3,
  recent4,
  recent5,
  recent6,
  recent7,
  recent8,
} from "./imports.js";

const Recent = () => {
  return (
    <div className="recents">
      <h2>RECENTS</h2>
      <div className="main">
        <div className="recent">
          <img src={recent1} />
          <div className="text">
            <span>-14%</span>
          </div>
        </div>
        <div className="recent">
          <img src={recent2} />
          <div className="text">
            <span>-27%</span>
          </div>
        </div>
        <div className="recent">
          <img src={recent3} />
          <div className="text">
            <span></span>
          </div>
        </div>
        <div className="recent">
          <img src={recent4} />
          <div className="text">
            <span></span>
          </div>
        </div>
        <div className="recent">
          <img src={recent5} />
          <div className="text">
            <span>-5%</span>
          </div>
        </div>
        <div className="recent">
          <img src={recent6} />
          <div className="text">
            <span></span>
          </div>
        </div>
        <div className="recent">
          <img src={recent7} />
          <div className="text">
            <span>-10%</span>
          </div>
        </div>
        <div className="recent">
          <img src={recent8} />
          <div className="text">
            <span>-10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;

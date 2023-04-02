import React from "react";
import ".//styles/blogs.css";
import search from "../assets/icons/search.png";
import { Suggest } from "../components";
import { CiFilter } from "react-icons/ci";
import { BsFillCaretDownFill, BsFillCircleFill } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="blogpage">
      <div className="main">
        <div className="topp">
          <div className="filter">
            <div className="topic">
              <div className="icon">
                <CiFilter />
              </div>
              <div className="text">Filter</div>
              <div className="arrow">
                <BsFillCaretDownFill />
              </div>
            </div>
            <div className="dropdown">
              <ul>
                <li>Latest</li>
                <li>Trending</li>
                <li>Lifestyle</li>
                <li>New release</li>
              </ul>
            </div>
          </div>
          <div className="search">
            <img src={search} alt="search botton" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="notification">
            <div className="topic">
              <div className="icon">
                <MdNotificationsNone />
              </div>
              <div className="texts">Notification</div>
              <p className="unread">
                <BsFillCircleFill />
              </p>
            </div>
          </div>
        </div>
        <div className="middle"></div>
        <Suggest />
      </div>
    </div>
  );
};

export default Blogs;

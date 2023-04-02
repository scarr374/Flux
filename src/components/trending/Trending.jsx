import React from "react";
import "./trending.css";
import { Link, NavLink } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { addcart, long, nikeair, stripeshirt, flowers } from "./imports.js";
import BasicRating from "../Rating/Rating";
import Rating from "@mui/material/Rating";

const Trending = () => {
  return (
    <div className="featured">
      <div className="products">
        <NavLink to="/Products">
          <h1 className="text">TRENDING</h1>
        </NavLink>
        <div className="product-card">
          <div className="image">
            <img src={flowers} alt="shirt" />
          </div>
          <div className="product-details">
            <div className="product-name">
              <h5>Nike Air Jordan</h5>
            </div>
            <div className="rating">
              <Rating
                name="half-rating-read"
                defaultValue={3}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="price">$25.00</div>
            <div className="white">
              <Link>
                <img src={addcart} alt="add to cart" />
              </Link>
            </div>
          </div>
          <div className="like">
            <Link>
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </Link>
          </div>
        </div>
        <div className="product-card">
          <div className="image">
            <img src={nikeair} alt="shoe" />
          </div>
          <div className="product-details">
            <div className="product-name">
              <h5>Nike Air Jordan</h5>
            </div>
            <div className="rating">
              <BasicRating />
            </div>
            <div className="price">$120.00</div>
            <div className="white">
              <Link>
                <img src={addcart} alt="add to cart" />
              </Link>
            </div>
          </div>
          <div className="like">
            <Link>
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </Link>
          </div>
        </div>
        <div className="product-card">
          <div className="image">
            <img src={stripeshirt} alt="shirt" />
          </div>
          <div className="product-details">
            <div className="product-name">
              <h5>Nike Air Jordan</h5>
            </div>
            <div className="rating">
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="price">$53.00</div>
            <div className="white">
              <Link>
                <img src={addcart} alt="add to cart" />
              </Link>
            </div>
          </div>
          <div className="like">
            <Link>
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </Link>
          </div>
        </div>
        <div className="product-card">
          <div className="image">
            <img src={long} alt="shirt" />
          </div>
          <div className="product-details">
            <div className="product-name">
              <h5>Nike Air Jordan</h5>
            </div>
            <div className="rating">
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="price">$98.00</div>
            <div className="white">
              <Link>
                <img src={addcart} alt="cart" />
              </Link>
            </div>
          </div>
          <div className="like">
            <Link>
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

import React from "react";
import {
  Brand,
  Slider,
  Services,
  Categories,
  Trending,
  Recent,
  Showcase,
} from "../components";

const Home = () => {
  return (
    <div className="Home">
      <Showcase />
      <Categories />
      <Services />
      <Trending />
      <Recent />
      <Slider />
      <Brand />
    </div>
  );
};

export default Home;

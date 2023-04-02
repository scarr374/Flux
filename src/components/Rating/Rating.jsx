import * as React from "react";
import Box from "@mui/material/Box";
import "./rating.css";
import Rating from "@mui/material/Rating";

export default function BasicRating() {
  return (
    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
  );
}

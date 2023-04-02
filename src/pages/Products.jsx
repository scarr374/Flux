import React from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import ".//styles/products.css";
import { gr3, gr4 } from "./imports/products.js";
import { Radio } from "@mui/material";
import { Slider, Recent } from "../components";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

const Products = () => {
  return (
    <div className="Products">
      <div className="actual">
        <div className="up">
          <div className="const">Products / </div>
          <div className="variable">
            <NavLink to="/Products/men">men</NavLink>
          </div>
        </div>
        <div className="down">
          <div className="left">
            <div className="sort products">
              <div className="title">
                <h3>Products</h3>
              </div>
              <div className="options">
                <ul>
                  <li>Shirts</li>
                  <li>Shoes</li>
                  <li>Bags</li>
                  <li>Hats</li>
                  <li>Hoddies</li>
                </ul>
              </div>
            </div>
            <div className="sort filter">
              <div className="title">
                <h3>Filter by</h3>
              </div>
              <div className="sorts">
                <div className="price">
                  <div className="header">Price ($)</div>
                  <div className="ranging">
                    <span>0</span>
                    <input type="range" min={0} max={1000} />
                    <span>1000</span>
                  </div>
                  <div className="checks">
                    <div className="ltoh">
                      <RadioGroup name="use-radio-group" defaultValue="first">
                        <MyFormControlLabel
                          value="first"
                          label="lowest to highest"
                          control={<Radio />}
                        />
                        <MyFormControlLabel
                          value="second"
                          label="highest to lowest"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                <div className="colors"></div>
                <div className="sizes"></div>
              </div>
            </div>
            <div className="sort suggested">
              <div className="title">Suggested products</div>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="leftside">
                <div className="constant">Sort by: </div>
                <div className="vary">
                  <div className="list">
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">A-Z</option>
                      <option value="title-descending">Z-A</option>
                      <option value="new">Newest</option>
                      <option value="popular">Trending</option>
                    </select>
                  </div>
                  <div className="arrow">
                    <RiArrowDownSLine />
                  </div>
                </div>
              </div>
              <div className="rightside">
                <div className="productno">
                  <p>21 products</p>
                </div>
                <div className="productarrange">
                  <img src={gr3} className="grid3" alt="grid" />
                  <img src={gr4} className="grid4" alt="grid" />
                </div>
              </div>
            </div>
            <div className="bottem"></div>
          </div>
        </div>
      </div>
      <div className="ending">
        <Recent />
        <Slider />
      </div>
    </div>
  );
};

export default Products;

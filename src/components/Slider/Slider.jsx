import React, { useState } from "react";
import classes from "./Slider.module.css";
import { images } from "../../data/images";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
const Slider = () => {
  const [position, setPosition] = useState(1);
  const image = images[position];
  const previous = () => {
    setPosition((prev) => (prev - 1 + images.length) % images.length);
  };
  const next = () => {
    setPosition((prev) => (prev + 1) % images.length);
  };
  return (
    <div className={classes.slider}>
      <div className={classes.slider_body}>
        <img src={image.link} alt="" />
        <h1>{image.desc}</h1>
      </div>
      <div className={classes.button_container}>
        <div className={classes.button} onClick={previous}>
          <ArrowBack fontSize="large"></ArrowBack>
        </div>
        <div className={classes.button} onClick={next}>
          <ArrowForward fontSize="large"></ArrowForward>
        </div>
      </div>
    </div>
  );
};

export default Slider;

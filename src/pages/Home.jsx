import React from "react";
import Slider from "../components/Slider/Slider";
import classes from "./Home.module.css";
import ad3 from "../assets/ad3.jpg";
import ad1 from "../assets/ad1.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={classes.home}>
      <Slider className={classes.slider}></Slider>
      <div className={classes.ads}>
        <div className={classes.ad1}>
          <img src={ad1} alt="" />
          <div>
            <h1>Premium designer clothes</h1>
            <span>from</span>
            <h1 className={classes.brand}>Nike</h1>
          </div>
          <Link to="/products">
            <p className={classes.shop}>Shop</p>
          </Link>
        </div>
        <div className={classes.ad2}>
          <img src={ad3} alt="" />
          <div>
            <h1>50% off on all dresses </h1>
            <span>from</span>
            <h1 className={classes.brand}>Victoria's Secret</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

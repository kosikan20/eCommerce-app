import React from "react";
import classes from "./Card.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  return (
    <Link to={`/${product.id}`} style={{ textDecoration: "none" }}>
      <div className={classes.card}>
        <img src={product.image} alt="" />
        <p className={classes.title}>{product.title}</p>
        <div className={classes.desc}>
          <h3 className={classes.price}>USD{product.price}</h3>
          <div className={classes.rating}>
            <StarRateIcon></StarRateIcon>
            <p>{product.rating.rate}</p>
            <p>({product.rating.count})</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

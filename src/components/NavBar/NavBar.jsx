import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div>
      <ul className={classes.container}>
        <div className={classes.home}>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </div>
        <div className={classes.links}>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;

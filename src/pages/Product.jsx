import React from "react";
import classes from "./Product.module.css";
import { useParams } from "react-router-dom";
import products from "../data/data";
import Card from "../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
const Product = (props) => {
  const { id } = useParams();
  const product = products[id - 1];
  const [cartItems] = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className={classes.product}>
      <Card product={product} key={product.id} />
      <button
        className={classes.cart_button}
        onClick={() => dispatch(addItem({ product }))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

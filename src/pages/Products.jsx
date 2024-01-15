import React from "react";
import classes from "./Products.module.css";
import products from "../data/data";
import Card from "../components/Card/Card";
const Products = () => {
  return (
    <div className={classes.products}>
      <h2>Products</h2>
      <div className={classes.container}>
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;

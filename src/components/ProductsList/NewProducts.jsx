import React from "react";
import styles from "./NewProducts.module.css";

const products = [
  {
    id: 1,
    name: "Product One",
    price: "$29.99",
    image:
      "https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A brief description of Product One.",
  },
  {
    id: 2,
    name: "Product Two",
    price: "$39.99",
    image:
      "https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A brief description of Product Two.",
  },
  {
    id: 3,
    name: "Product Three",
    price: "$49.99",
    image:
      "https://images.pexels.com/photos/821413/pexels-photo-821413.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A brief description of Product Three.",
  },
];

const ProductList = () => {
  return (
    <section className={styles.productList}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <p className={styles.productDescription}>{product.description}</p>
              <button className={styles.button}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;

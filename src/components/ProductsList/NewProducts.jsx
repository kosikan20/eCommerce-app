import React from "react";
import styles from "./NewProducts.module.css";

const products = [
  {
    id: 1,
    name: "Elegant Evening Gown",
    price: "$149.99",
    image:
      "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A stunning evening gown with a fitted bodice and flowing skirt, perfect for formal events and special occasions.",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$69.99",
    image:
      "https://images.pexels.com/photos/1470528/pexels-photo-1470528.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A light and airy summer dress adorned with vibrant floral prints, ideal for casual outings and sunny days.",
  },
  {
    id: 3,
    name: "Chic Wrap Dress",
    price: "$89.99",
    image:
      "https://images.pexels.com/photos/2312250/pexels-photo-2312250.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A versatile wrap dress with a flattering silhouette that can be dressed up or down, suitable for both office and evening wear.",
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;

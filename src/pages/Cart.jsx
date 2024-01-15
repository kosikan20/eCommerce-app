import classes from "./Cart.module.css";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

const Cart = () => {
  const { totalAmount, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={classes.cart}>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((product) => {
          return (
            <div className={classes.cart_container}>
              <div className={classes.cart_container_body}>
                <div className={classes.cart_image}>
                  <img src={product.image} alt="cart-item" />
                </div>
                <div className={classes.cart_desc}>
                  <p className={classes.cart_name}>{product.title}</p>
                  <p className={classes.cart_price}>{product.price}</p>
                  <div className={classes.cart_quantity}>
                    x {product.quantity}
                  </div>
                </div>
              </div>

              <div
                className={classes.cart_button}
                onClick={() => dispatch(removeItem({ product }))}
              >
                Remove
              </div>
            </div>
          );
        })
      ) : (
        <h2>Your Cart is Empty</h2>
      )}
      <div className={classes.cart_totalPrice}>
        <div>Total Amount:</div>
        <div>USD {totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Cart;

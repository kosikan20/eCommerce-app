import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalAmount: 0,
    cartItems: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === payload.product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
      } else {
        state.cartItems.push({
          ...payload.product,
        });
      }
      state.totalAmount += payload.product.price;
    },
    removeItem: (state, { payload }) => {
      state.totalAmount -= payload.product.totalPrice;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.product.id
      );
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem } = cartSlice.actions;

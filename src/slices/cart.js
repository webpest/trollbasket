import { createSlice, createSelector } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  increaseItemInCart,
  decreaseItemInCart,
} from "utils/cart";

export const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCart: (state, { payload }) => {
      state.carts = addItemToCart(state.carts, payload);
    },
    setRemoveItemFromCart: (state, { payload }) => {
      state.carts = removeItemFromCart(state.carts, payload);
    },
    setIncreaseItemt: (state, { payload }) => {
      state.carts = increaseItemInCart(state.carts, payload);
    },
    setDecreaseItem: (state, { payload }) => {
      state.carts = decreaseItemInCart(state.carts, payload);
    },
  },
});

export const {
  setAddToCart,
  setRemoveItemFromCart,
  setIncreaseItemt,
  setDecreaseItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCarts = (state) => state.cart.carts;

export const selectTotalItem = createSelector(selectCarts, (carts) => {
  return carts.reduce((total, { quantity }) => total + quantity, 0);
});

export const selectTotalCost = createSelector(selectCarts, (carts) => {
  return carts.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
});

export const addToCart = (item) => (dispatch) => {
  dispatch(setAddToCart(item));
};

export const removeFromCart = (item) => (dispatch) => {
  dispatch(setRemoveItemFromCart(item));
};

export const increaseQty = (item) => (dispatch) => {
  dispatch(setIncreaseItemt(item));
};

export const decreaseQty = (item) => (dispatch) => {
  dispatch(setDecreaseItem(item));
};

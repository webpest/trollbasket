import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "utils/cart";

export const initialState = {
  loading: false,
  hasErrors: false,
  products: [],
  filteredProduct: [],
  selectedProduct: {},
  carts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload[0];
    },
    setFilteredProducts: (state, { payload }) => {
      state.filteredProduct = payload;
    },
    setAddToCart: (state, { payload }) => {
      state.carts = addItemToCart(state.carts, payload);
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  setSelectedProduct,
  setAddToCart,
} = productSlice.actions;

export default productSlice.reducer;

export const selectProducts = (state) => state.product;
export const selectCarts = (state) => state.product.carts;
export const selectProductDetail = (state) => state.product.selectedProduct;

export const fetchProducts = () => (dispatch) => {
  const { products } = require("../mock/products");
  dispatch(setProducts(products));
  dispatch(setFilteredProducts(products));
};

export const fetchProduct = (id) => (dispatch, getState) => {
  const { products } = getState().product;
  const selectedProduct = products.filter((product) => {
    return product.id === id;
  });
  dispatch(setSelectedProduct(selectedProduct));
};

export const searchByName = (query) => (dispatch, getState) => {
  const { products } = getState().product;
  const result = products.filter((product) => {
    return product.name.search(query) !== -1;
  });
  dispatch(setFilteredProducts(result));
};

export const searchByLocation = (location) => (dispatch, getState) => {
  const { products } = getState().product;
  const result = products.filter((product) => {
    return product.location.search(location) !== -1;
  });
  dispatch(setFilteredProducts(result));
};

export const addToCart = (product) => (dispatch) => {
  dispatch(setAddToCart(product));
};

export const removeFromCart = (product) => (dispatch) => {
  console.log(product);
};

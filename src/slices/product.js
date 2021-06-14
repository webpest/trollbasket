import { createSlice, createSelector } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
  filteredProduct: [],
  selectedProduct: {},
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
  },
});

export const { setProducts, setFilteredProducts, setSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;

export const selectProducts = (state) => state.product;
export const selectProductDetail = (state) => state.product.selectedProduct;

export const selectLocations = createSelector(
  selectProducts,
  ({ products }) => {
    const locations = [];
    products.forEach(({ location }) => locations.push(location));
    return [...new Set(locations)];
  }
);

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
  const result = products.filter(({ name }) => {
    return String(name).toLowerCase().includes(String(query).toLowerCase());
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

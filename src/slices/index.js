import productReducer from "./product";
import cartReducer from "./cart";
import { combineReducers } from "redux";

export default combineReducers({
  product: productReducer,
  cart: cartReducer,
});

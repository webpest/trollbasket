import productReducer from "./product";
import { combineReducers } from "redux";

export default combineReducers({
  product: productReducer,
});

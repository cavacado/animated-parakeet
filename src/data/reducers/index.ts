import { combineReducers } from "redux";
import productsReducer from "./products";

export interface State {
  products: ReturnType<typeof productsReducer>;
}

export default combineReducers({
  products: productsReducer,
});

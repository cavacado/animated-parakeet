import { createActions } from "redux-actions";
import { ProductsDetails } from "../../../services/Products/interface";

export enum ProductsActionTypes {
  REQUEST = "PRODUCTS_REQUEST",
  SUCCESS = "PRODUCTS_SUCCESS",
  FAILURE = "PRODUCTS_FAILURE",
  INIT = "PRODUCTS_INIT",
}

const { productsRequest, productsSuccess, productsFailure } = createActions({
  [ProductsActionTypes.REQUEST]: () => {},
  [ProductsActionTypes.SUCCESS]: (data: ProductsDetails) => ({
    data,
  }),
  [ProductsActionTypes.FAILURE]: (error: string) => ({ error }),
});

export default {
  productsRequest,
  productsSuccess,
  productsFailure,
};

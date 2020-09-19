import { call, put, takeLatest } from "redux-saga/effects";

import actions, { ProductsActionTypes } from "../../actions/products";
import { ProductsDetails } from "../../../services/Products/interface";
import { ServicesType } from "../../../services/types";

type RequiredServices = Pick<ServicesType, "Products">;

function retrieveProducts(services: RequiredServices) {
  return function* ({ payload }: ReturnType<typeof actions.productsRequest>) {
    try {
      const { data }: { data: ProductsDetails } = yield call(
        services.Products.getProducts
      );
      yield put(actions.productsSuccess(data));
    } catch (e) {
      const message = "Error in Products Saga";
      yield put(actions.productsFailure(message));
      console.error(message);
    }
  };
}

export default (services: RequiredServices) => [
  takeLatest(ProductsActionTypes.REQUEST, retrieveProducts(services)),
];

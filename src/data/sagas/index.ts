import { all } from "redux-saga/effects";

import productsSaga from "./products";
import { ServicesType } from "../../services/types";

export default function* rootSaga(services: ServicesType) {
  const allSagas = [...productsSaga({ Products: services.Products })];
  yield all(allSagas);
}

import { handleActions } from "redux-actions";

import { AsyncStates } from "../../../utils";
import { ProductsActionTypes } from "../../actions/products";
import { movie } from "../../../services/Products/interface";

export interface ProductsState {
  status: AsyncStates;
  error: string;
  data: movie[];
}
export const initialState: ProductsState = {
  status: AsyncStates.INITIAL,
  error: "",
  data: [],
};

export default handleActions(
  {
    [ProductsActionTypes.REQUEST]: (state) => ({
      ...state,
      error: "",
      status: AsyncStates.LOADING,
    }),
    [ProductsActionTypes.SUCCESS]: (state, action) => ({
      ...state,
      error: "",
      status: AsyncStates.SUCCESS,
      data: action.payload.data,
    }),
    [ProductsActionTypes.FAILURE]: (state, action) => ({
      ...state,
      error: action.payload.error,
      status: AsyncStates.ERROR,
    }),
  },
  initialState
);

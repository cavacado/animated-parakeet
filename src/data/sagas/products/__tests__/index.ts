import SagaTester from "redux-saga-tester";

import rootSaga from "../../";
import services from "../../../../services";
import rootReducer, { State } from "../../../reducers";
import { AsyncStates } from "../../../../utils";
import actions, { ProductsActionTypes } from "../../../actions/products";
import { productDetails as mockDetails } from "../../../../services/Products/mockData";

const mockProductsService = {
  getProducts: jest.fn(),
};

const dummyAction = {
  type: "@@DummyAction",
};
describe("Products", () => {
  let sagaTester: SagaTester<State>;
  beforeAll(() => {
    sagaTester = new SagaTester({
      initialState: rootReducer(undefined, dummyAction as any),
      reducers: rootReducer as any,
    });
    sagaTester.start(rootSaga, {
      ...services,
      Products: mockProductsService,
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
    sagaTester.reset(true);
  });
  it("calls service and is successful", async () => {
    mockProductsService.getProducts.mockImplementation(() =>
      Promise.resolve({ data: mockDetails })
    );
    sagaTester.dispatch(actions.productsRequest());
    await sagaTester.waitFor(ProductsActionTypes.SUCCESS);
    expect(mockProductsService.getProducts).toHaveBeenCalled();
    const state = sagaTester.getState().products;
    expect(state.data).toMatchObject(mockDetails);
  });
  it("calls service and is unsuccessful", async () => {
    mockProductsService.getProducts.mockImplementation(() => Promise.reject());
    sagaTester.dispatch(actions.productsRequest());
    await sagaTester.waitFor(ProductsActionTypes.FAILURE);
    expect(mockProductsService.getProducts).toHaveBeenCalled();
    const state = sagaTester.getState().products;
    expect(state.error).toBe("Error in Products Saga");
  });
});

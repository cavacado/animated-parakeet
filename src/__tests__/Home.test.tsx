import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../data/store";
import { productDetails as mockDetails } from "../services/Products/mockData";
import Home from "../components/Home";
import Details from "../components/Details";
const mockGetProducts = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ data: mockDetails }));
const mockGetProductsError = jest
  .fn()
  .mockImplementation(() => Promise.reject());
const mockServices = {
  Products: {
    getProducts: mockGetProducts,
  },
};
const mockError = {
  Products: {
    getProducts: mockGetProductsError,
  },
};
const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockPush,
  }),
}));
describe("Home tests", () => {
  beforeEach(() => {
    mockGetProducts.mockClear();
    mockGetProductsError.mockClear();
  });
  it("renders properly", async () => {
    const { getByText } = renderWithRouter(["/"], mockServices);
    await waitFor(() => expect(mockGetProducts).toHaveBeenCalledTimes(1));
    expect(getByText("Deadpool")).toBeInTheDocument;
  });
  it("goes to details page on item click", async () => {
    const { getByText, getByTestId } = renderWithRouter(["/"], mockServices);
    await waitFor(() => expect(mockGetProducts).toHaveBeenCalledTimes(1));
    expect(getByText("Deadpool")).toBeInTheDocument;
    fireEvent.click(getByText("Deadpool"));
    expect(mockPush).toHaveBeenCalledTimes(1);
  });
  it("renders a full screen error on error", async () => {
    const { getByText } = renderWithRouter(["/"], mockError);
    await waitFor(() => expect(mockGetProductsError).toHaveBeenCalledTimes(1));
    expect(getByText("Click here to retry")).toBeInTheDocument;
    fireEvent.click(getByText("Click here to retry"));
    expect(mockGetProductsError).toHaveBeenCalledTimes(2);
  });
});

function renderWithRouter(initialEntries: string[] = [], mockServices: any) {
  return render(
    <Provider store={store(mockServices)}>
      <MemoryRouter initialEntries={initialEntries}>
        <Route path="/" component={Home} />
        <Route path="/details" component={Details} />
      </MemoryRouter>
    </Provider>
  );
}

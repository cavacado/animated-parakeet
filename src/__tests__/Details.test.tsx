import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../data/store";
import { productDetails as mockDetails } from "../services/Products/mockData";
import Home from "../components/Home";
import Details from "../components/Details";
import Layout from "../components/Layout";
const mockGetProducts = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ data: mockDetails }));
const mockServices = {
  Products: {
    getProducts: mockGetProducts,
  },
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "/details", state: mockDetails[0] }),
}));
describe("Details tests", () => {
  it("renders properly", () => {
    const { getByText } = renderWithRouter(["/details"], mockServices);
    expect(getByText("Deadpool")).toBeInTheDocument;
  });
  it("on click back arrow, will navigate back to home", () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      ["/details"],
      mockServices
    );
    fireEvent.click(getByTestId("arrow-left"));
    expect(queryByTestId("arrow-left")).not.toBeInTheDocument;
  });
});

function renderWithRouter(initialEntries: string[] = [], mockServices: any) {
  return render(
    <Provider store={store(mockServices)}>
      <MemoryRouter initialEntries={initialEntries}>
        <Layout isLight={false} setTheme={jest.fn()}>
          <Route path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Layout>
      </MemoryRouter>
    </Provider>
  );
}

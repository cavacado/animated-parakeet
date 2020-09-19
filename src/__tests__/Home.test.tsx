import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";

describe("Home tests", () => {
  it("renders properly", () => {
    const { getByText } = renderWithRouter(["/"]);
    expect(getByText("Home")).toBeInTheDocument;
  });
});

function renderWithRouter(initialEntries: string[] = []) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Route path="/" component={Home} />
      <Route path="/details" component={Details} />
    </MemoryRouter>
  );
}

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Providers from "../Providers";

const mockedMatchMedia = jest.fn();
describe("Providers tests", () => {
  beforeAll(() => {
    global.window.matchMedia = mockedMatchMedia;
  });
  afterEach(() => {
    mockedMatchMedia.mockClear();
  });
  it("renders, and defaults to Home component as the entry point", () => {
    const { getByText } = renderSubject();
    expect(getByText("Home")).toBeInTheDocument();
  });
  it("renders white theme if the user's preference is white", async () => {
    mockedMatchMedia.mockResolvedValue({ matches: true });
    const { getByText } = renderSubject();
    expect(getByText("Home")).toBeInTheDocument();
  });
  it("renders dark theme if the user's preference is dark", () => {
    mockedMatchMedia.mockReturnValueOnce({ matches: false });
    const { getByText } = renderSubject();
    expect(getByText("Home")).toBeInTheDocument();
  });
  it("toggles theme on toggle click", () => {
    const { getByLabelText } = renderSubject();
    const toggle = getByLabelText("toggle");
    fireEvent.click(toggle);
  });
});

const renderSubject = (props?) => {
  return render(<Providers {...props} />);
};

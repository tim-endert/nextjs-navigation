import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Herobanner from "./Herobanner";

describe("<Herobanner />", () => {
  it("renders the title", () => {
    const title = "My Title";
    render(<Herobanner title={title} />);
    const headlineElement = screen.getByText(title);
    expect(headlineElement).toBeInTheDocument();
  });

  it("renders the background color", () => {
    const title = "My Title";
    render(<Herobanner title={title} />);
    const heroBannerElement = screen.getByTestId("hero-banner");
    expect(heroBannerElement).toHaveStyle({ background: "#191825" });
  });

  it("renders the font color", () => {
    const title = "My Title";
    render(<Herobanner title={title} />);
    const headlineElement = screen.getByText(title);
    expect(headlineElement).toHaveStyle({ color: "#ffa3fd" });
  });

  it("renders the font size", () => {
    const title = "My Title";
    render(<Herobanner title={title} />);
    const headlineElement = screen.getByText(title);
    expect(headlineElement).toHaveStyle({ fontSize: "48px" });
  });
});

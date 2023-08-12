import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo"; // Adjust the path to the actual location of the Logo component

describe("Logo Component", () => {
  it("renders the logo with the correct attributes", () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText("feedahelpLogo");

    expect(logoImage).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "./footer"; // Update the import path based on your project structure

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("displays '2023 FeedAHelp' text", () => {
    const { getByText } = render(<Footer />);
    const feedAHelpText = getByText("© 2023 FeedAHelp. All rights reserved.");
    expect(feedAHelpText).toBeInTheDocument();
  });
});

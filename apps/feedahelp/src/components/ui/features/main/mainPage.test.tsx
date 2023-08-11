import React from "react";
import { render } from "@testing-library/react";
import { MainPage } from "./main"; // Update the import path based on your project structure

describe("Main Component", () => {
  it("renders without crashing", () => {
    render(<MainPage />);
  });

  it("displays 'FeedAHelp' text", () => {
    const { getByText } = render(<MainPage />);
    const feedAHelpText = getByText("FeedAHelp");
    expect(feedAHelpText).toBeInTheDocument();
  });
});

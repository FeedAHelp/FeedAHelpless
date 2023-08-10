import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "./Layout"; // Update the import path based on your project structure

describe("Layout Component", () => {
  it("renders without crashing", () => {
    render(<Layout />);
  });
});

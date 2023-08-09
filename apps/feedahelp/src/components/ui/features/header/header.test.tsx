import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header"; // Update the import path based on your project structure
import { act } from "@testing-library/react";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    act(() => {
      render(<Header />);
    });
  });
});

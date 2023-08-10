import React from "react";
import { render, act } from "@testing-library/react"; // Import act from testing library
import { Header } from "./Header";

describe("Header Component", () => {
  it("renders without crashing", () => {
    act(() => {
      render(<Header />);
    });
  });
});
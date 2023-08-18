import React from "react";
import { render , act } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
    it("renders without crashing", () => {
        act(() => {
          render(<Hero />);
        });
      });
});
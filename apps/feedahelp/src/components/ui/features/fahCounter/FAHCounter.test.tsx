import React from "react";
import { render } from "@testing-library/react";
import FAHCounter from "./FAHCounter";

describe("FAHCounter Component", () => {
  it("renders the FAHCounterDisplay components with correct data", () => {
    const { getByText, getByAltText } = render(<FAHCounter />);

    // Check for the titles
    expect(getByText("TOTAL MONTHLY DONATIONS ($)")).toBeInTheDocument();
    expect(getByText("TOTAL CHEFT COOKING")).toBeInTheDocument();
    expect(getByText("TOTAL FAMILY HELPED")).toBeInTheDocument();
    expect(getByText("TOTAL PEOPLE FEED")).toBeInTheDocument();
    expect(getByText("TOTAL OLD AGE HELPED")).toBeInTheDocument();
    expect(getByText("TOTAL USER REGISTERED")).toBeInTheDocument();
  });
});

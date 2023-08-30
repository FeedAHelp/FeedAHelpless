/* import React from "react";
import { render } from "@testing-library/react";
import CircularText from "./circularText"; // Adjust the path to match your file structure

describe("CircularText Component", () => {
  it("renders the circular text with the provided input", () => {
    const text = "ExampleText";
    const { container } = render(<CircularText text={text} />);

    const textContainer = container.querySelector(".text");
    expect(textContainer).toBeInTheDocument();

    const charElements = container.querySelectorAll(".text span");
    expect(charElements.length).toBe(text.length);

    text.split("").forEach((char, index) => {
      const charElement = charElements[index];
      expect(charElement.textContent).toBe(char);
    });
  });

  it("sets the correct initial rotation and transform origin", () => {
    const text = "ExampleText";
    const { container } = render(<CircularText text={text} />);

    const charElements = container.querySelectorAll(".text span");
    charElements.forEach((charElement, index) => {
      const expectedRotation = index * 12;
      const expectedTransformOrigin = index * 75;

      const style = window.getComputedStyle(charElement);
      expect(style.transform).toContain(`rotate(${expectedRotation}deg)`);
      expect(style.transformOrigin).toContain(`0 ${expectedTransformOrigin}px`);
    });
  });

  // You can add more test cases for resize behavior and other scenarios
});
 */
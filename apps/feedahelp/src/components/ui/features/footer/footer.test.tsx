import React from "react";
import { render, screen } from "@testing-library/react";
import FooterSocial from "./FooterSocial";
describe("FooterSocial", () => {
  it("renders social media links and images", () => {
    render(<FooterSocial />);
    const socialMediaLinks = screen.queryAllByRole("link");
    const imageElements = screen.queryAllByAltText("feedahelpLogo");
    socialMediaLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
    imageElements.forEach((image) => {
      expect(image).toHaveAttribute("width", "40");
      expect(image).toHaveAttribute("height", "40");
      expect(image).toHaveClass("h-full object-cover");
    });
  });
});

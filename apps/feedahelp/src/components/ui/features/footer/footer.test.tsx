import React from "react";
import { render } from "@testing-library/react";
import FooterSocial from "./FooterSocial";

// Mock the fetchSocialMedia function
jest.mock("~/utils/cms/fetchSocialMedia", () => ({
  fetchSocialMedia: jest.fn(() => Promise.resolve([])),
}));

test("renders social media icons", async () => {
  const { findByAltText } = render(<FooterSocial />);
  
  // Wait for the component to render
  const socialIcons = await findByAltText("feedahelpLogo");

  expect(socialIcons).toBeInTheDocument();
});

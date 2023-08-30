/* import React from "react";
import { render } from "@testing-library/react";
import Sponsors from "./Sponsors"; // Adjust the path to match your file structure

describe("Sponsors Component", () => {
  const mockItems = [
    { imgSrc: "image1.jpg", alt: "Image 1", text: "Sponsor 1" },
    { imgSrc: "image2.jpg", alt: "Image 2", text: "Sponsor 2" },
    // Add more mock items as needed
  ];

  it("renders the Sponsors component with mock data", () => {
    // Render the component with mock data
    const { getByAltText, getByText } = render(<Sponsors items={mockItems} />);

    // Check if each item's image and text is rendered
    mockItems.forEach((item) => {
      const imageElement = getByAltText(item.alt);
      expect(imageElement).toBeInTheDocument();

      const textElement = getByText(item.text);
      expect(textElement).toBeInTheDocument();
    });
  });
});
 */
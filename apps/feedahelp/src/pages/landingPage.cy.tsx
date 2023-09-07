import React from "react";
import Index from "./index";

describe("<Index />", () => {
  it("renders", () => {
    cy.viewport(550, 750); // Set viewport to 550px x 750px
    cy.viewport("iphone-6"); // Set viewport to 375px x 667px
    cy.mount(<Index />);
  });
});

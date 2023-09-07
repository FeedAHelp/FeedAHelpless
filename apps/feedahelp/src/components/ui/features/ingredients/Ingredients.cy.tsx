import React from "react";
import Ingredients from "./Ingredients";

describe("<Ingredients />", () => {
  it("renders", () => {
    cy.viewport(550, 750); // Set viewport to 550px x 750px
    cy.viewport("iphone-6"); // Set viewport to 375px x 667px
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Ingredients />);
  });
});

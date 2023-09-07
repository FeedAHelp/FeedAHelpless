import React from "react";
import Index from "./index";
import { describe } from "@jest/globals";

describe("<Index />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Index />);
  });
});

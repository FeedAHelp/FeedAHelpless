import React from "react";
import FAHCounter from "./FAHCounter";

describe("<FAHCounter />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FAHCounter />);
  });
});

import React from 'react'
import DeshiMenus from './DeshiMenus'

describe('<DeshiMenus />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DeshiMenus />)
  })
})
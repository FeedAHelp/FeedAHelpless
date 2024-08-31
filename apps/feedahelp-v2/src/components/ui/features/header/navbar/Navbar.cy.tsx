import React from 'react'
import NewNav from './Navbar'

describe('<NewNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewNav />)
  })
})
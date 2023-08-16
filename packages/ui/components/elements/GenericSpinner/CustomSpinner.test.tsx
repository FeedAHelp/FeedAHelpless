import React from 'react'
import { render } from '@testing-library/react'
import CustomSpinner from './CustomSpinner'

describe('CustomSpinner', () => {
  it('should render spinner when isLoading is true', () => {
    const { container } = render(<CustomSpinner isLoading={true} />)
    const preloader = container.querySelector('.preloader')
    const shadow = container.querySelector('.shadow')

    expect(preloader).toBeInTheDocument()
    expect(shadow).toBeInTheDocument()
  })

  it('should render children when isLoading is false', () => {
    const { getByText, queryByTestId } = render(
      <CustomSpinner isLoading={false}>
        <div>Test Children</div>
      </CustomSpinner>
    )

    const children = getByText('Test Children')
    const preloader = queryByTestId('preloader')

    expect(children).toBeInTheDocument()
    expect(preloader).not.toBeInTheDocument()
  })
})

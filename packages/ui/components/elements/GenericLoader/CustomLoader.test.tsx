import React from 'react';
import { render } from '@testing-library/react';
import CustomLoader from './CustomLoader';

jest.mock('../CustomLoader.styled', () => ({
  CardContainer: 'div',
}));

describe('CustomLoader Component', () => {
  it('renders loader when isLoading is true', () => {
    const { container } = render(<CustomLoader isLoading={true} />);
    const cardContainer = container.querySelector('.CardContainer');
    expect(cardContainer).toBeInTheDocument();
  });

  it('renders children when isLoading is false', () => {
    const { container, queryByText } = render(
      <CustomLoader isLoading={false}>
        <div>Content to render when not loading</div>
      </CustomLoader>
    );
    const childElement = queryByText('Content to render when not loading');
    expect(childElement).toBeInTheDocument();
  });
});

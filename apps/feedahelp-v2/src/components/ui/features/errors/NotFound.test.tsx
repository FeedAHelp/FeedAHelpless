import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  test('renders component with correct content', () => {
    const { getByText, getByAltText } = render(<NotFound />);
    
    const title = getByText("Sorry, Page Not Found!");
    const message = getByText(/Sorry, we couldn’t find the page you’re looking for.*Perhaps you’ve mistyped the URL\? Be sure to check*your spelling./);
    const image = getByAltText("notFound-gif");
    const link = getByText("Back to Home Page");

    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forbidden from './Forbidden';

describe('Forbidden Component', () => {
  test('renders component with correct content', () => {
    const { getByText, getByAltText } = render(<Forbidden />);
    
    const title = getByText("No permission");
    const message = getByText(/The page you're trying access has restricted access.*Please Login First./);
    const image = getByAltText("notFound-gif");
    const link = getByText("Back to Home Page");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional assertions
import Unauthorized from './Unauthorized';

describe('Unauthorized Component', () => {
  test('renders component with correct content', () => {
    const { getByText, getByAltText } = render(<Unauthorized />);
    
    const title = getByText("401-Unauthorized");
    const message = getByText("Access is allowed only for register users");
    const image = getByAltText("notFound-gif");
    const link = getByText("Back to Login Page");

    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});

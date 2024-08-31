import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ServerError from './ServerError';

describe('ServerError Component', () => {
  test('renders component with correct content', () => {
    const { getByText, getByAltText } = render(<ServerError />);
    
    const title = getByText("500 Internal Server Error");
    const message = getByText("There was an error, please try again later.");
    const image = getByAltText("notFound-gif");
    const backButton = getByText("Back to Login Page");
    const tryAgainButton = getByText("Try again");

    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(tryAgainButton).toBeInTheDocument();
  });
});

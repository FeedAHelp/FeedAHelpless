import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import ServiceUnavailable from './ServiceUnavailable';

describe('ServiceUnavailable Component', () => {
  test('renders component with correct content', () => {
    const estimatedTime = 5000;
    const { getByText, getByAltText } = render(<ServiceUnavailable estimatedTime={estimatedTime} />);
    
    const title = getByText("Service Temporarily Unavailable");
    const message = getByText("Our website is under construction. Please Stay with us!");
    const image = getByAltText("notFound-gif");
    const comingSoon = getByText("COMING SOON");

    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(comingSoon).toBeInTheDocument();
  });

  
});

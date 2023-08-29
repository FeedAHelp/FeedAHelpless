import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer'; 

describe('Footer', () => {
  it('renders the footer component', () => {
    render(<Footer />);
    
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Join Our Community')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Want To Know More')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

});

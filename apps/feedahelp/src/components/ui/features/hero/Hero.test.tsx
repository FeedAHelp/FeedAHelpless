import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
describe('Hero component', () => {
  it('renders the hero content', () => {
    render(<Hero />);
    const titleElement = screen.getByText(/Your Recipe/i);
    expect(titleElement).toBeInTheDocument();
    const backgroundImage = screen.getByTestId('hero-background');
    expect(backgroundImage).toHaveStyle(
      'background-image: url(\'/assets/hero-cover.png\')'
    );
  });
});

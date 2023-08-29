import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero'; 

test('renders all elements', () => {
  render(<Hero/>);
});

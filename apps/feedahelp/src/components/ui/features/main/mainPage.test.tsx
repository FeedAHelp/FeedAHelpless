import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from './main';

describe('MainPage', () => {
  it('renders without errors', () => {
    render(<MainPage />);
  });
});

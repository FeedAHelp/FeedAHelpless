import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LanguageSelections from './LanguageSelections';

test('LanguageSelections component functionality', () => {
  render(<LanguageSelections />);

  const buttonElement = screen.getByAltText('language-icon');
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(screen.getByText('English')).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(screen.queryByTestId('language-dropdown-content')).not.toBeInTheDocument();
});

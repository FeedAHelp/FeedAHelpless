import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CurrencyDropDown from './CurrencyDropDown';

test('LanguageSelections component functionality', () => {
  render(<CurrencyDropDown />);

  const buttonElement = screen.getByAltText('currency-icon');
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(screen.getByText('USD')).toBeInTheDocument();
  expect(screen.getByText('EUR')).toBeInTheDocument();
  expect(screen.getByText('GBP')).toBeInTheDocument();
  expect(screen.getByText('JPY')).toBeInTheDocument();
  expect(screen.getByText('DKK')).toBeInTheDocument();
  expect(screen.getByText('BDT')).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(screen.queryByTestId('currency-dropdown-content')).not.toBeInTheDocument();
});

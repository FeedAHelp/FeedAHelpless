import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import CurrencyDropDown from './CurrencyDropDown'; 

describe('LanguageSelections Component', () => {
  test('Dropdown toggles on button click', () => {
    const { getByText, queryByText } = render(<CurrencyDropDown />);

    const toggleButton = getByText('Currency');
    expect(queryByText('USD')).not.toBeInTheDocument(); 
    expect(queryByText('EUR')).not.toBeInTheDocument(); 
    expect(queryByText('GBP')).not.toBeInTheDocument(); 
    expect(queryByText('JPY')).not.toBeInTheDocument(); 
    expect(queryByText('DKK')).not.toBeInTheDocument(); 
    expect(queryByText('BDT')).not.toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(queryByText('USD')).toBeInTheDocument(); 
    expect(queryByText('EUR')).toBeInTheDocument(); 
    expect(queryByText('GBP')).toBeInTheDocument(); 
    expect(queryByText('JPY')).toBeInTheDocument(); 
    expect(queryByText('DKK')).toBeInTheDocument(); 
    expect(queryByText('BDT')).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(queryByText('USD')).not.toBeInTheDocument(); 
    expect(queryByText('EUR')).not.toBeInTheDocument(); 
    expect(queryByText('GBP')).not.toBeInTheDocument(); 
    expect(queryByText('JPY')).not.toBeInTheDocument(); 
    expect(queryByText('DKK')).not.toBeInTheDocument(); 
    expect(queryByText('BDT')).not.toBeInTheDocument();
  });
});

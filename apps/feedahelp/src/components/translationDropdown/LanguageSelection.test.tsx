import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import LanguageSelections from './LanguageSelections'; 

describe('LanguageSelections Component', () => {
  test('Dropdown toggles on button click', () => {
    const { getByText, queryByText } = render(<LanguageSelections />);
    const toggleButton = getByText('Languages');
    expect(queryByText('English')).not.toBeInTheDocument(); 
    fireEvent.click(toggleButton);
    expect(queryByText('English')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(queryByText('English')).not.toBeInTheDocument();
  });
});

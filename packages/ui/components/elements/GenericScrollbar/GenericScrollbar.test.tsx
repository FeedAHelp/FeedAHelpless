import React from 'react';
import { render } from '@testing-library/react';
import { GenericScrollbar } from './GenericScrollbar';

describe('CustomScrollBar', () => {
  it('renders with the provided props', () => {
    const { getByText, getByTestId } = render(
      <GenericScrollbar height="400px" bg_color="#D62929" width="300px">
        <div>Scrollable Content</div>
      </GenericScrollbar>
    );

    const scrollbar = getByTestId('custom-scrollbar');
    const content = getByText('Scrollable Content');

    expect(scrollbar).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    expect(scrollbar).toHaveStyle('height: 400px');
    expect(scrollbar).toHaveStyle('background-color: #D62929');
    expect(scrollbar).toHaveStyle('width: 300px');
  });
});

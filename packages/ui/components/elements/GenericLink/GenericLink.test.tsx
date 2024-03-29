import React from 'react';
import { render } from '@testing-library/react';
import GenericLink from './GenericLink'; 

describe('GenericLink component', () => {
  it('renders correctly with given props', () => {
    const props = {
      href: 'https://example.com',
      color: 'blue',
      backgroundColor: 'lightgray',
    };

    const { getByText } = render(<GenericLink {...props}>Test Link</GenericLink>);

    const linkElement = getByText('Test Link');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', props.href);
    expect(linkElement).toHaveStyle(`color: ${props.color}`);
    expect(linkElement).toHaveStyle(`background-color: ${props.backgroundColor}`);
  });
});

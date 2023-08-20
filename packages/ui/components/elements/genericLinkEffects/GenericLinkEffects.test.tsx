import React from 'react';
import { render } from '@testing-library/react';
import GenericLinkEffects from './GenericLinkEffects';

test('renders GenericLinkEffects with default props', () => {
  const { getByText } = render(
    <GenericLinkEffects href="https://example.com">Link Text</GenericLinkEffects>
  );

  const linkElement = getByText('Link Text');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass('text-base');
});

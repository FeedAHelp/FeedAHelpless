import React from 'react';
import { render } from '@testing-library/react';
import FAHCounterDisplay from './FAHCounterDisplay';

describe('YourComponent', () => {
  it('renders an image with the correct attributes', () => {
    const imageIcon = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
    const imageAlt = 'Alt text for your image';

    const { container } = render(
      <FAHCounterDisplay
        imageIcon={imageIcon}
        imageAlt={imageAlt}
      />
    );
    const imageElement = container.querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('width', '50');
    expect(imageElement).toHaveAttribute('height', '50');
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  test('Should render the component', () => {
    const { container } = render(<Footer />);

    expect(container).toBeDefined();
  });
});

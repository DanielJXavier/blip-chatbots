import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

jest.unmock('react-router-dom');

describe('App component', () => {
  test('Should render the component', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });
});

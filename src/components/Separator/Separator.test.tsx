import React from 'react';

import { render } from '@testing-library/react';

import Separator from './Separator';

describe('Separator component', () => {
  test('Should render the component', () => {
    const { container } = render(<Separator />);

    expect(container).toBeDefined();
  });
});

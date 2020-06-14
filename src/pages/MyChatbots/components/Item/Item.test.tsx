import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

const defaultProps = {
  shortName: '',
  image: '',
  name: '',
  template: '',
  created: '',
  isFavorite: false,
  isList: false,
  handleFavoriteClick: jest.fn()
};

const renderComponent = (props = defaultProps) => render(<Item {...props} />);

describe('Item component', () => {
  test('Should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeDefined();
  });

  test('Should render the component with isList = true', () => {
    const props = {
      ...defaultProps,
      isList: true
    };

    const { container } = renderComponent(props);

    expect(container.firstChild).toHaveClass('list');
  });

  test('Should render the component with isFavorite = true', () => {
    const props = {
      ...defaultProps,
      isFavorite: true
    };

    const { getByTestId } = renderComponent(props);

    const img = getByTestId('img-star');

    expect(img?.getAttribute('alt')).toBe('Remove from favorites');
    expect(img?.getAttribute('src')).toBe('star.png');
  });
});

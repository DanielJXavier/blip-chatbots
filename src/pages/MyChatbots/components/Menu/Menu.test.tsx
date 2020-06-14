import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Menu from './Menu';

const defaultProps = {
  search: '',
  isList: false,
  setSearch: jest.fn(),
  setOrderByName: jest.fn(),
  setIsList: jest.fn()
};

const renderComponent = (props = defaultProps) => render(<Menu {...props} />);

describe('Menu component', () => {
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

  test('Should handle setSearch', () => {
    const { getByTestId } = renderComponent();

    const input = getByTestId('input-search');

    const searchText = 'test';

    fireEvent.change(input, { target: { value: searchText }});

    expect(defaultProps.setSearch).toBeCalledWith(searchText);
  });

  test('Should handle clean search button click', () => {
    const props = {
      ...defaultProps,
      search: 'test'
    };

    const { getByTestId } = renderComponent(props);

    const button = getByTestId('button-clean-search');

    fireEvent.click(button);

    expect(defaultProps.setSearch).toBeCalledWith('');
  });

  test('Should handle order by name button click', () => {
    const { getByTestId } = renderComponent();

    const button = getByTestId('button-order-by-name');

    fireEvent.click(button);

    expect(defaultProps.setOrderByName).toBeCalledWith(true);
  });

  test('Should handle order by creation button click', () => {
    const { getByTestId } = renderComponent();

    const button = getByTestId('button-order-by-creation');

    fireEvent.click(button);

    expect(defaultProps.setOrderByName).toBeCalledWith(false);
  });

  test('Should handle show cards button click', () => {
    const { getByTestId } = renderComponent();

    const button = getByTestId('button-show-cards');

    fireEvent.click(button);

    expect(defaultProps.setIsList).toBeCalledWith(false);
  });

  test('Should handle show list button click', () => {
    const { getByTestId } = renderComponent();

    const button = getByTestId('button-show-list');

    fireEvent.click(button);

    expect(defaultProps.setIsList).toBeCalledWith(true);
  });
});

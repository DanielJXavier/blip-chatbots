import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MyChatbotsContext } from 'contexts/myChatbots';

import myChatbots from 'data/myChatbots';

import MyChatbots from './MyChatbots';

const renderComponent = () => render(
  <MyChatbotsContext.Provider value={myChatbots}>
    <MyChatbots/>
  </MyChatbotsContext.Provider>
);

describe('MyChatbots component', () => {
  afterEach(() => {
    localStorage.setItem('favorites', '[]');
  });

  test('Should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeDefined();
  });

  test('Should retrieve favorites from localStorage', () => {
    localStorage.setItem('favorites', JSON.stringify([myChatbots[0]]));
    
    const { queryByTestId } = renderComponent();

    const divFavorites = queryByTestId('div-favorites');

    expect(divFavorites).toBeTruthy();
  });

  test('Should handle handleAddFavorite', () => {
    const chatbotName = 'Billy Hargrove';

    const { getByTestId, queryByTestId } = renderComponent();

    const divItems = getByTestId('div-items');

    expect(divItems).toHaveTextContent(chatbotName);
    expect(queryByTestId('div-favorites')).toBeNull();
    
    const addToFavorites = divItems.querySelectorAll('[data-testid="img-star"]')[0];

    fireEvent.click(addToFavorites);

    const divFavorites = queryByTestId('div-favorites');

    expect(divFavorites).toHaveTextContent(chatbotName);
  });

  test('Should handle handleRemoveFavorite', () => {
    localStorage.setItem('favorites', JSON.stringify([myChatbots[0]]));

    const chatbotName = 'Eleven';

    const { getByTestId, queryByTestId } = renderComponent();

    const divFavorites = getByTestId('div-favorites');

    expect(divFavorites).toHaveTextContent(chatbotName);
    
    const removeFromFavorites = divFavorites.querySelectorAll('[data-testid="img-star"]')[0];

    fireEvent.click(removeFromFavorites);
    
    const divItems = getByTestId('div-items');

    expect(divItems).toHaveTextContent(chatbotName);
    expect(queryByTestId('div-favorites')).toBeNull();
  });

  test('Should order items by creation', () => {
    const { getByTestId } = renderComponent();

    const divItems = getByTestId('div-items');
    
    expect(divItems.children[1]).toHaveTextContent('Chief Hopper');
    
    const orderByCreation = getByTestId('button-order-by-creation');

    fireEvent.click(orderByCreation);

    expect(divItems.children[1]).toHaveTextContent('Suzie');
  });

  test('Should show items in list', () => {
    localStorage.setItem('favorites', JSON.stringify([myChatbots[0]]));

    const { getByTestId } = renderComponent();

    const showList = getByTestId('button-show-list');

    fireEvent.click(showList);

    const divFavorites = getByTestId('div-favorites');
    const divItems = getByTestId('div-items');

    expect(divFavorites).toHaveClass('list');
    expect(divItems).toHaveClass('list');
  });

  test('Should show noContent message', () => {
    localStorage.setItem('favorites', JSON.stringify([myChatbots[0]]));

    const { getByTestId, queryByTestId } = renderComponent();

    const search = getByTestId('input-search');

    fireEvent.change(search, { target: { value: 'Some text that don\'t return results' } });

    const noContent = queryByTestId('div-no-content');

    expect(queryByTestId('div-favorites')).toBeNull();
    expect(queryByTestId('div-items')).toBeNull();
    expect(noContent).toBeTruthy();
  });

  test('Should handle no content clean search button', () => {
    localStorage.setItem('favorites', JSON.stringify([myChatbots[0]]));

    const { getByTestId, queryByTestId } = renderComponent();

    const search = getByTestId('input-search');

    fireEvent.change(search, { target: { value: 'Some text that don\'t return results' } });

    const cleanSearch = getByTestId('button-clean-search-no-content');

    fireEvent.click(cleanSearch);

    expect(queryByTestId('div-favorites')).toBeTruthy();
    expect(queryByTestId('div-items')).toBeTruthy();
  });
});

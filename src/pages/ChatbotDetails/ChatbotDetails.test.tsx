import React from 'react';

import { render } from '@testing-library/react';

import { MyChatbotsContext } from 'contexts/myChatbots';

import myChatbots from 'data/myChatbots';

import ChatbotDetails from './ChatbotDetails';

const renderComponent = () => render(
  <MyChatbotsContext.Provider value={myChatbots}>
    <ChatbotDetails/>
  </MyChatbotsContext.Provider>
);

describe('ChatbotDetails component', () => {
  test('Should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeDefined();
  });
});

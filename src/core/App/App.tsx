import React, { FC } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { MyChatbotsContext } from 'contexts/myChatbots';

import myChatbots from 'data/myChatbots';

import Header from 'core/Header';

import MyChatbots from 'pages/MyChatbots';

const App: FC = () => (
  <MyChatbotsContext.Provider value={myChatbots}>
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/my-chatbots">
            <MyChatbots />
          </Route>
          <Redirect to="/my-chatbots" />
        </Switch>
      </Router>
    </main>
  </MyChatbotsContext.Provider>
);

export default App;

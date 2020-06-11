import React, { FC } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from 'core/Header';

import MyChatbots from 'pages/MyChatbots';

const App: FC = () => (
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
);

export default App;

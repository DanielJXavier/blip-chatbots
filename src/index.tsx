import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from 'core/App';

import 'styles/global.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

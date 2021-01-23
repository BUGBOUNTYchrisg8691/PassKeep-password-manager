import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as BRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BRouter>
      <App />
    </BRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './services/app/store';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Can't find root!");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

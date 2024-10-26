import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/tailwind.css';
import './i18next';
import App from './main';
import { Provider } from 'react-redux';
import { store } from '@shared/infrastructure/store';

const container = document.getElementById('app-root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

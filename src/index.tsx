import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/tailwind.css';
import './i18next';
import App from './main';
import { Provider } from 'react-redux';
import { store } from '@shared/infrastructure/store';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development' || !process.env.REACT_APP_MSW) {
    return;
  }
  const { worker } = await import('./modules/Product/infrastructure/mocks/msw/browser');
  return worker.start();
}

const container = document.getElementById('app-root');
const root = createRoot(container!);
enableMocking().then(() =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
);

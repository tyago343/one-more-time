import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './main';
import './styles/tailwind.css';
import './i18next';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development' || !process.env.REACT_APP_MSW) {
    return
  }
  const { worker } = await import('./modules/Product/mocks/msw/browser')
  return worker.start()
}

const container = document.getElementById('app-root');
const root = createRoot(container!);
enableMocking().then(() => root.render(<App />))

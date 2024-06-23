import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './main';
import './styles/tailwind.css';
const container = document.getElementById('app-root');
const root = createRoot(container!);
root.render(<App />);
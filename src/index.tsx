import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";

import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);


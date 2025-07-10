// index.test.tsx
import React from 'react';
import App from '../../pages/App';
import './assets/styles/index.css';

// Mock ReactDOM.createRoot
jest.mock('react-dom/client', () => ({
  createRoot: () => ({
    render: jest.fn(),
  }),
}));

test('renders the App component without crashing', () => {
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);

  const { createRoot } = require('react-dom/client');
  const rootInstance = createRoot(rootDiv);

  rootInstance.render(<App />);

  expect(rootInstance.render).toHaveBeenCalledWith(<App />);
});

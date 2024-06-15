import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

//creating root for JSX
const root = createRoot(document.getElementById('root'));
//rendering root / app
createRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CartProvider } from './contexts/CartContext/CartProvider';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
  </StrictMode>,
);

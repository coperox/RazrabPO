import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import { CartProvider } from './contexts/CartContext';
import { ApiProvider } from './contexts/ApiContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApiProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ApiProvider>
  </React.StrictMode>
)
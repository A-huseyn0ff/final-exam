import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BasketProvider from './context/basket.jsx'
import WishlistProvider from './context/wishlist.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
    <App />
    </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>,
)

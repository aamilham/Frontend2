import React, { useState } from 'react';
import './App.css';
import Movies from './assets/movies';
import Cart from './assets/cart';

const PAGE_MOVIES = 'movies';
const PAGE_CART = 'cart';

function App() {
  const [cart, setcart] = useState([]);
  const [page, setpage] = useState(PAGE_MOVIES)


  const AddToCart = (movie) => {
    setcart([...cart, { ...movie }]);
  };

  const removeFromCart = (movieToRemove) => {
    setcart(cart.filter((movie) => movie !== movieToRemove))
  };

  const navigateTo = (nextPage) => {
    setpage(nextPage);
  };


  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_MOVIES)}>Movies list</button>
        <button onClick={() => navigateTo(PAGE_CART)}>Watchlist ({cart.length}) </button>
      </header>
      {page === PAGE_MOVIES && ( <Movies AddToCart={AddToCart} /> )}
      {page === PAGE_CART && <Cart cart={cart}  removeFromCart={removeFromCart} />}

    </div>
  );
}

export default App;

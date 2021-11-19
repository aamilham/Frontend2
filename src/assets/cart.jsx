import React, { useState } from 'react';

export default function Cart({ cart, removeFromCart }) {
    return (
        <>
            <h1>Watchlist</h1>
            <div className="movies">
                {
                    cart.map((movie, idx) => (
                        <div className="movie" key={idx}>
                            <h3>{movie.name}</h3>
                            <h4>{movie.desc}</h4>
                            <img src={movie.image} alt={movie.name} />
                            <button onClick={() => removeFromCart(movie)}>
                                Remove
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

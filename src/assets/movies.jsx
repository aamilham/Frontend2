import React, { useState } from 'react';


export default function Movies({ AddToCart }) {
    const [movies] = useState([
        {
            name: 'Dune',
            desc: 'A mythic and emotionally charged heros journey, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planets exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanitys greatest potential-only those who can conquer their fear will survive. —Warner Bros.',
            image: 'https://cdn1-production-images-kly.akamaized.net/LRmMieNF_W5fmV6f2-5J8og1RII=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3600988/original/092691200_1634104734-MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ__._V1_FMjpg_UX1000_.jpg',
            button: <a href="./asset/dune"></a>

        },
        {
            name: 'Spiderman: Far From Home',
            desc: 'Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peters plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent. —Sony Pictures Entertainment.',
            image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f71abb2bcebd042d5e7bc2d9165269ca26292f718f7e9af3cd6a11c9cee9c9e9._RI_V_TTW_.jpg',
        },
        {
            name: 'Shang Chi',
            desc: 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.',
            image: 'https://cdn0-production-images-kly.akamaized.net/JiCDYDWDmwp7DDNIBlTTGOzABGE=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3434118/original/014340800_1618897521-EzVqwiaVoAIAv-E.jpg',
        },
        {
            name: 'Eternals',
            desc: 'Following the events of Avengers: Endgame (2019), an unexpected tragedy forces the Eternals, ancient aliens who have been living on Earth in secret for thousands of years, out of the shadows to reunite against mankinds most ancient enemy, the Deviants.',
            image: 'https://tr.web.img4.acsta.net/pictures/21/10/21/16/49/4124932.jpg',
        },
        {
            name: 'Black Widow',
            desc: 'In Marvel Studios action-packed spy thriller Black Widow, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger. —topmeasure.',
            image: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        },
        {
            name: 'Dont Breathe 2',
            desc: 'Hiding out for years in an isolated cabin, Norman Nordstrom has taken in and raised a young girl orphaned from a house fire. Their quiet existence is shattered when a group of kidnappers show up and take the girl, forcing Norman to leave his safe haven to save her.',
            image: 'https://media.matamata.com/thumbs/2021/10/12/47688-sinopsis-dont-breathe-2-instagramatdontbreathemovie/o-img-47688-sinopsis-dont-breathe-2-instagramatdontbreathemovie.jpg',
        },
    ]);

    

    return (
        <>
            <h1>Hacera Movies</h1>
            <div className="movies">
                {
                    movies.map((movie, idx) => (
                        <div className="movie" key={idx}>
                            <h3>{movie.name}</h3>
                            <h4>{movie.desc}</h4>
                            <img src={movie.image} alt={movie.name} />
                            <button onClick={() => AddToCart(movie)}>
                                Add to Watchlist
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

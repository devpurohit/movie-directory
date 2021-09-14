import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './GenreRow.scss';
import httpClient from '../../axios';

function GenreRow({ title, reqUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchGenreData() {
           const req = await httpClient.get(reqUrl);
           setMovies(req.data.results);
          }
          fetchGenreData();

    },[reqUrl]);

    const slugify = (movieTitle) => `/movie-details/${movieTitle.replaceAll(' ', '-').toLowerCase()}`

    return (
        <div className="genre--row">
            <h2>{title}</h2>
            <div className="card--container">
            {
                movies.map((movie,i) => {
                    return (
                        <Link to={{ pathname: slugify(movie.name || movie.title), state: { movieId: movie.id} }} key={i}>
                            <img className="card"
                                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                alt={movie.name}
                                />
                        </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default GenreRow
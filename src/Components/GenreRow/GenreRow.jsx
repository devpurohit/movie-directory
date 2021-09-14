import React, { useState, useEffect } from "react";
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

    return (
        <div className="genre--row">
            <h2>{title}</h2>
            <div className="card--container">
            {
                movies.map((movie,i) => {
                    return (
                        <img className="card"
                            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                            alt={movie.name}
                            />
                        
                        )
                    })
                }
            </div>
        </div>
    )
}
export default GenreRow
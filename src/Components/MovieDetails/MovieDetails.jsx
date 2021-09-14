import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './MovieDetails.scss';
import request from '../../api';
import httpClient from '../../axios';

const MovieDetails = () => {
    const location = useLocation();
    const movieId = location.state.movieId;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchMovieData() {
            const res = await httpClient.get(request.fetchDetails(movieId));
            setMovie(res.data);
        }
        fetchMovieData();
    },[])
    

    return (
    <div className="details--container">
        <div className="movie--poster">
            <img className="card"
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.name}
            />
        </div>
        <div className="movie--details">
            <h2>{movie.name || movie.title }</h2>
            <h3><i>{movie.tagline}</i></h3>
            <br/>
            <span>{movie.release_date ? movie.release_date.split('-')[0] : '-' } | {movie.status}</span>
            <br/>
            <p>Movie Description: {movie.overview}</p>
        </div>
    </div>
    )
}

export default MovieDetails;
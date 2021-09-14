import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import './SearchResults.scss';
import request from '../../api';
import httpClient from '../../axios';

const SearchResults = () => {
    let { slug } = useParams();
    console.log(slug)

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function fetchSearchData() {
            const req = await httpClient.get(request.searchRequest(slug));
            setSearchResults(req.data.results);
            console.log(searchResults)
           }
           fetchSearchData();
    },[slug])

    const slugify = (movieTitle) => `/movie-details/${movieTitle.replaceAll(' ', '-').toLowerCase()}`

    return (
        <div className="search--row">
        <h3>Showing Results for: {searchResults.title}</h3>
        <div className="search-results--container">
        {
            searchResults.map((movie,i) => {
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
)}

export default SearchResults;

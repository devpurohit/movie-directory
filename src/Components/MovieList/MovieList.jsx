import React, { useState, useEffect } from "react";
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [genreMap, setGenreMap] = useState([]);

    useEffect(() => {
        const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=81e15281a62436910fa985cc5e2249e2&language=en-US`;
        try {
            const res = await fetch(genreUrl);
            const data  = await res.json();
            setGenreMap(data.genres.slice(0,6));
        } catch(err) {
            console.error(err);
        }
        
        this.searchMovie();
    },[]);

    const searchMovie = async (event) => {
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=81e15281a62436910fa985cc5e2249e2&
                    language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        } catch(err){
            console.error(err);
        }    
    }
    

  
    let displayMovies = movies.filter(movie => movie.poster_path).map(movie => {
        return (
            <MovieCard 
                
            />
        )
    })
     
    return (
        <>
            <form className="form">
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="Enter a movie name" onChange= {e => {
                        setQuery(e.target.value)
                    }}/>
                <button className="button" type="submit" onClick={searchMovie}>Search</button>
            </form>
            {displayMovies}
        </>
    )
}
export default MovieList;

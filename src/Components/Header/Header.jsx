import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Header.scss';

const Header = () => {
    const [query, setQuery] = useState("");

    const searchMovie = (event) => {
        event.preventDefault();
    }

    return (
        <header>
            <Link to="/"><h2>Movie Directory</h2></Link>
            <form className="search--form">
                <input className="search--input" type="text" name="query"
                    placeholder="Enter a movie name" onChange= {e => {
                        setQuery(e.target.value)
                    }}/>
                <button className="search--button" type="submit" onClick={searchMovie}>Search</button>
            </form>
        </header>
    )


}

export default Header;
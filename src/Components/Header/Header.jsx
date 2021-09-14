import React, { useState, useEffect } from "react";

import './Header.scss';

const Header = () => {
    const [query, setQuery] = useState("");

    const searchMovie = (event) => {
        event.preventDefault();
    }

    return (
        <header>
            <h2>Movie Directory</h2>
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
import React, { setQuery, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import './Header.scss';

const Header = () => {
    let history = useHistory();

    const [query, setQuery ] = useState("");
    const searchMovie = (event) => {
        event.preventDefault();
        history.push(`/search/${query}`);
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
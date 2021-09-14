import React, { useState, useEffect } from "react";

import GenreRow from '../GenreRow/GenreRow';
import requests from '../../api';
import './Home.scss';

const Home = () => {

    return (
        <div className="home">
            <GenreRow title="Trending" reqUrl={requests.trendingRequest} />
            <GenreRow title="Originals" reqUrl={requests.originalsRequests} />
            <GenreRow title="Action" reqUrl={requests.actionRequest} />
            <GenreRow title="Comedy" reqUrl={requests.comedyRequest} />
            <GenreRow title="Romance" reqUrl={requests.romanceRequest} />
            <GenreRow title="Fantasy" reqUrl={requests.fantasyRequest} />
        </div>
    )
}
export default Home;

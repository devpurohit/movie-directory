const API_KEY ="81e15281a62436910fa985cc5e2249e2";

const requests = {
    trendingRequest : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    originalsRequests: `/discover/tv?api_key=${API_KEY}`,
    adventureRequest: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    actionRequest: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyRequest: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fantasyRequest: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    romanceRequest: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    horrorRequest: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDetails: (movieId) => `/movie/${movieId}?api_key=${API_KEY}`,
    searchRequest: (slug) => `/search/movie?api_key=${API_KEY}&query=${slug}`
};

export default requests;
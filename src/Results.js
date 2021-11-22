// import React from 'react'
import React, { useEffect, useState } from 'react'
import './Results.css';
import VideoCard from './VideoCard'
import axios from './axios';
import requests from './requests';
// import instance from './axios';

function Results() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTV);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div className="results">
            {movies.map((movie) => (
                <VideoCard 
                movie={movie}
                // key={movie.id}
                />
            ))}
            {/* <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> */}
        </div>
    )
}

export default Results

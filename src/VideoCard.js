import React from 'react'
import './VideoCard.css';

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdisneyadsales.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fhulu-white.png&f=1&nofb=1" 
            alt='' />
            <p>What the film is about</p>
            <h2>Movie Title</h2>
            <p>How many likes</p>
        </div>
    )
}

export default VideoCard

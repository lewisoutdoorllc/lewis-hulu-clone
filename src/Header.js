import React from 'react'
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


export default function Header() {
    return (
        <div>
            {/* header start */}
            <div className="header">
                {/* ICONS */}
                <div className="header__icons">
                    <div className="header__icon 
                    header__icon--active">
                        <HomeIcon />
                        <p>Home</p>
                    </div>
                    <div className="header__icon">
                        <FlashOnIcon />
                        <p>Trending</p>
                    </div>
                    <div className="header__icon">
                        <LiveTvIcon />
                        <p>Verified</p>
                    </div>
                    <div className="header__icon">
                        <VideoLibraryIcon />
                        <p>Collections</p>
                    </div>
                    <div className="header__icon">
                        <SearchIcon />
                        <p>Search</p>
                    </div>
                    <div className="header__icon">
                        <PersonOutlineIcon />
                        <p>Account</p>
                    </div>
                </div>
                {/* HULU LOGO */}
                <img
                    className="header__logo"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdisneyadsales.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fhulu-white.png&f=1&nofb=1"
                    alt="hulu logo"
                />
            </div>
            {/* header end */}
        </div>
    )
}




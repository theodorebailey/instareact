// import react
import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

// create component
function Navbar () {

    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/search" className="navbar-item">Search</Link>
            <Link to="/portfolio" className="navbar-item">Explore</Link>
            <Link to="/contact" className="navbar-item">Reels</Link>
            <Link to="/" className="navbar-item">Messages</Link>
            <Link to="/" className="navbar-item">Notifications</Link>
            <Link to="/" className="navbar-item">Create</Link>
            <Link to="/profile" className="navbar-item">Profile</Link>
        </section>
    )

}

// export component
export default Navbar;
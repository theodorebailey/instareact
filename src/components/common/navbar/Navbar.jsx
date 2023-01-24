// import react
import React from 'react';
import { Link } from 'react-router-dom';

import Home from './../images/home.png';
import Search from './../images/search.png';
import Create from './../images/create.png';
import Explore from './../images/explore.png';
import Notifications from './../images/heart.png';
import Instagram from './../images/instagramtext.png';
import Messages from './../images/message.png';
import Profile from './../images/profile.png';
import Reels from './../images/reels.png';
import Burger from './../images/burger.png';

import './Navbar.css';

// create component
function Navbar () {

    return (
        <>
        <hr id="sideline"/>
        <section className="navbar">
        <hr className=""/>
            <div className="sidenav-element">
                <img src={Instagram} alt="" />
                <Link to="/" className="navbar-item"></Link>
            </div>
            <div className="sidenav-element">
                <img src={Home} alt="" />
                <Link to="/" className="navbar-item">Home</Link>
            </div>
            <div className="sidenav-element">
                <img src={Search} alt="" />
                <Link to="/profile" className="navbar-item">Search</Link>
            </div>
            <div className="sidenav-element">
                <img src={Explore} alt="" />
                <Link to="/portfolio" className="navbar-item">Explore</Link>
            </div>
            <div className="sidenav-element">
                <img src={Reels} alt="" />
                <Link to="/profile" className="navbar-item">Reels</Link>
            </div>
            <div className="sidenav-element">
                <img src={Messages} alt="" />
                <Link to="/profile" className="navbar-item">Messages</Link>
            </div>
            <div className="sidenav-element">
                <img src={Notifications} alt="" />
                <Link to="/profile" className="navbar-item">Notifications</Link>
            </div>
            <div className="sidenav-element">
                <img src={Create} alt="" />
                <Link to="/profile" className="navbar-item">Create</Link>
            </div>
            <div className="sidenav-element">
                <img src={Profile} alt="" />
                <Link to="/profile" className="navbar-item">Profile</Link>
            </div>
            <div className="sidenav-element navbar-last-item">
                <img src={Burger} alt="" />
                <Link to="/" className="navbar-item">More</Link>
            </div>
        </section>
        </>
    )

}

// export component
export default Navbar;
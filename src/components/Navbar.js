//src/components/Navbar.js

import React from "react";
import "./styles/Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){

    return(
        <div className = "header">
            <Link to="/" id="home-btn">rngee.io</Link>
            <div id="nav-links">
                <Link to="/dice" className="nav-btn">Dice</Link>
                <Link to="/number" className="nav-btn">Number</Link>
                <Link to="/coins" className="nav-btn">Coins</Link>
                <Link to="/words" className="nav-btn">Words</Link>
                <Link to="/passwords" className="nav-btn">Passwords</Link>
                <Link to="/colors" className="nav-btn">Colors</Link>
            </div>
        </div>
    );
}


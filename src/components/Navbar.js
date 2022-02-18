//src/components/Navbar.js

import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import "./styles/Navbar.css";
import Dice from "./Dice";



export default function Navbar(){

    return(
        <Router className = "header">
            <Link to="/" id="home-btn"><h3>rngee.io</h3></Link>
            <div id="nav-links">
                <Link to={Dice} className="nav-btn">Dice</Link>
                <a href="#number">Number</a>
                <a href="#coins">Coins</a>
                <a href="#words">Words</a>
                <a href="#password">Passwords</a>
                <a href="#colors">Colors</a>
            </div>
        </Router>
    );
}


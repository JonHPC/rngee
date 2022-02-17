//src/components/Navbar.js

import React from "react";
import "./styles/Navbar.css";

export default function Navbar(){
    return(
        <header>
            <a href="#home"><h3>rngee.io</h3></a>
            <div id="nav-links">
                <a href="#dice">Dice</a>
                <a href="#number">Number</a>
                <a href="#coins">Coins</a>
                <a href="#words">Words</a>
                <a href="#password">Passwords</a>
                <a href="#colors">Colors</a>
            </div>
        </header>
    );
}


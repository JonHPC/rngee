//src/components/Home.js

import React from "react";
import {Link} from "react-router-dom";
import diceIcon from "./images/dice_icon.png";
import numberIcon from "./images/number_icon.png";
import coinsIcon from "./images/coins_icon.png";
import wordsIcon from "./images/words_icon.png";
import passwordsIcon from "./images/passwords_icon.png";
import colorsIcon from "./images/colors_icon.png";
import "./styles/Home.css";


export default function Home(){
    return(
        <div className="home">
            <Link to="/dice" className="home-links" style={{textDecoration:'none'}}>
                <div className="home__div" id="home-dice">
                    <img src={diceIcon} alt="dice"></img>
                    <h3>Dice</h3>
                </div>
            </Link>
            <Link to="/number" className="home-links">
                <div className="home__div" id="home-number">
                    <img src={numberIcon} alt="number"></img>
                    <h3>Number</h3>
                </div>
            </Link>
            <Link to="/coins" className="home-links">
                <div className="home__div" id="home-coins">
                    <img src={coinsIcon} alt="coins"></img>
                    <h3>Coins</h3>
                </div>
            </Link>
            <Link to="/words" className="home-links">
                <div className="home__div" id="home-words">
                    <img src={wordsIcon} alt="words"></img>
                    <h3>Words</h3>
                </div>
            </Link>
            <Link to="/passwords" className="home-links">
                <div className="home__div" id="home-passwords">
                    <img src={passwordsIcon} alt="passwords"></img>
                    <h3>Passwords</h3>
                </div>
            </Link>
            <Link to="/colors" className="home-links">
                <div className="home__div" id="home-colors">
                    <img src={colorsIcon} alt="colors"></img>
                    <h3>Colors</h3>
                </div>
            </Link>
        </div>
    );
}
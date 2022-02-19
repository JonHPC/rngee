//./src/components/Coins.js
import React, {useState} from "react";
import "./styles/Coins.css";
import coinWhite from "./images/coin_white.png";
import coinBlack from "./images/coin_black.png";

export default function Coins(){
    const [coin, setCoin] = useState(coinWhite);
    const [result, setResult] = useState("Flip a coin");

    const flipCoin = () => {
        let flip = (Math.floor(Math.random() * 2) == 0);

        if(flip){
            setResult("Heads");
            setCoin(coinWhite);
        } else{
            setResult("Tails");
            setCoin(coinBlack);
        }
    }
    return(
        <div className="coins">
            <img src={coin}></img>
            <h1>{result}</h1>
            <button onClick={flipCoin} className="coins__btn">Flip Coin</button>
        </div>
    );
}
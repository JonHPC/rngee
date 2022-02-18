//src/components/Dice.js
import React, {useState, useEffect} from "react";
import './styles/Dice.css';
import dice1 from "./images/dice-1.png";
import dice2 from './images/dice-2.png';
import dice3 from './images/dice-3.png';
import dice4 from './images/dice-4.png';
import dice5 from './images/dice-5.png';
import dice6 from './images/dice-6.png';

export default function Dice(){
    const [dice, setDice] = useState(1);

    useEffect(() => {console.log(`You have ${dice} dice.`)}, [dice]);

    const addDice = () => {if(dice < 10){setDice(dice + 1);}}
    const removeDice = () => {if(dice > 1){setDice(dice - 1);}}

    return(
        <div className = "dice">
            <h1>Dice: {dice}</h1>
            <div className="dice-btn">
                <button className="dice-btn__add" onClick={addDice}>+</button>
                <button className="dice-btn__remove" onClick={removeDice}>-</button>
            </div>
            
        </div>
    );
}
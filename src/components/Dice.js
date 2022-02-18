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
    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];

    useEffect(() => {console.log(`You have ${dice} dice.`)}, [dice]);

    const addDice = () => {
        if(dice < 10){
            setDice(dice + 1);
            let newDice = document.createElement("img");
            newDice.id = `dice${dice+1}`;
            newDice.src = dice1;
            document.getElementById('dice-imgs').appendChild(newDice);
        }
    }

    const removeDice = () => {
        if(dice > 1){
            document.getElementById(`dice${dice}`).remove();
            setDice(dice - 1);
        }
    }

    const rollDice = () => {
        for(let i = 1; i <= dice; i++){
            let output = Math.floor(Math.random() * 6);
            let diceImg = document.getElementById(`dice${i}`);
            diceImg.src = `${diceArray[output]}`;
            diceImg.alt = "";
        }
    }

    return(
        <div className = "dice">
            <div id= "dice-imgs">
                <img id="dice1" src={dice1} alt=""></img>
            </div>
            <h1>Dice: {dice}</h1>
            <div className="roll-dice">
                <button className="roll-dice__go" onClick={rollDice}>Roll</button>
            </div>
            <div className="dice-btn">
                <button className="dice-btn__remove" onClick={removeDice}>-</button>
                <button className="dice-btn__add" onClick={addDice}>+</button>
            </div>
            
        </div>
    );
}
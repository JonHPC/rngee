//./src/components/Number.js

import React, {useState, useEffect} from "react";
import "./styles/Number.css";

export default function Number(){
    const [num, setNum] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    useEffect(() => {console.log(`You generated ${num}.`)}, [num]);

    const generateNumber = () => {
        setNum(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    const setMinValue = (e) => {
        setMin(Math.ceil(e.target.value));
    }

    const setMaxValue = (e) => {
        setMax(Math.floor(e.target.value));
    }
    return(
        <div className="number">
            <h1 id="number-text">{num}</h1>
            <button onClick={generateNumber} id="number-btn">Generate Number</button>
            <div className="number-input">
                <input type="number" onChange={setMinValue} id="number-input__min" placeholder="0" />
                <input type="number" onChange={setMaxValue} id ="number-input__max" placeholder="10"/>
            </div>
        </div>
    );
}
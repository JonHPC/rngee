//./src/components/Passwords.js

import React, {useState} from "react";
import "./styles/Passwords.css";

export default function Passwords(){

    const [password, setPassword] = useState("--------");
    const [length, setLength] = useState(8);

    const characters = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n',
    'O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z','0','1','2','3','4','5','6','7','8',
    '9','!','@','#','$','%','^','&','*','(',')', '-'
    ]

    const generatePassword = () => {
        let str = "";
        for(let i = 0; i <= length; i++){
            let index = Math.floor(Math.random() * characters.length);
            str += characters[index];
        }
        setPassword(str);
    }

    const updateLength = (e) => {
        setLength(e.target.value);
    }

    return(
        <div className="passwords">
            <h1>{password}</h1>
            <button onClick={generatePassword} className="passwords__btn">Generate Password</button>
            <label>{length}
                <div className="slider-container">
                    <input onChange={updateLength} type="range" defaultValue="8" min="8" max="20" className="slider-container__password"></input>
                </div>
            </label>
            <button onClick={() => navigator.clipboard.writeText(`${password}`)}>Copy</button>
        </div>
    );
}
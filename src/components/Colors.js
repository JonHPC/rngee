//./src/components/Colors.js
import React, {useState} from "react";
import "./styles/Colors.css";

export default function Colors(){
    const [color, setColor] = useState("Generate a random hexadecimal color");

    const generateColor = () => {
        setColor('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
    }

    const copyColor = () => {
        navigator.clipboard.writeText(`${color}`);
        alert('Color copied!');
    }

    const divStyle = {
        backgroundColor: `${color}`
    }

    return(
        <div className="colors">
            <div className="color-sample" style={divStyle}></div>
            <h1>{color}</h1>
            <button onClick={generateColor} className="colors__btn">Generate Color</button>
            <button onClick={copyColor}>Copy</button>
        </div>
    );
}
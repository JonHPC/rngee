//./src/components/Colors.js
import React, {useState} from "react";
import "./styles/Colors.css";

export default function Colors(){
    const [color, setColor] = useState("#000000");

    const generateColor = () => {
        setColor('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
    }

    const divStyle = {
        backgroundColor: `${color}`
    }

    return(
        <div className="colors">
            <div className="color-sample" style={divStyle}></div>
            <h1>{color}</h1>
            <button onClick={generateColor} className="colors__btn">Generate Color</button>
            <button onClick={() => navigator.clipboard.writeText(`${color}`)}>Copy</button>
        </div>
    );
}
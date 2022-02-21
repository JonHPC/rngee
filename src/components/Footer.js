//src/components/Footer.js

import React from "react";
import "./styles/Footer.css";
import githubIcon from "./images/github_logo.png";

export default function Footer(){
    return(
        <div id="footer">
            <h3>Copyright © 2022 Jonathan Chen</h3>
            <a href="https://github.com/jonhpc"><img src={githubIcon} alt="github"></img></a>
        </div>
    );
}
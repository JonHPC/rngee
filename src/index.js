import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Dice from './components/Dice';
import Number from './components/Number';
import Coins from './components/Coins';
import Words from './components/Words';
import Passwords from './components/Passwords';
import Colors from './components/Colors';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="dice" element={<Dice />} />
        <Route path="number" element={<Number />} />
        <Route path="coins" element={<Coins />} />
        <Route path="words" element={<Words />} />
        <Route path="passwords" element={<Passwords />} />
        <Route path="colors" element={<Colors />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);



import React from "react";
import { Synth } from '../Synth';
import "./style.css";

export const Player = () => {
    return <div className="player-wrapper">
        <h2>Sound Vane<br/>51.5072° N, 0.1276°<br/>15 Apr 2022</h2>
        <Synth />
    </div>
}
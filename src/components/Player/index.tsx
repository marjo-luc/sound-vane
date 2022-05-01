import React from "react";
import { Synth } from '../Synth';
import "./style.css";

export const Player = ({lnglat}) => {
    return <div className="player-wrapper">
        <h2>Sound Vane<br/>{lnglat.lng}, {lnglat.lat}<br/>15 Apr 2022</h2>
        <Synth />
    </div>
}
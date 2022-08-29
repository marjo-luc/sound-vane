import React from "react";
import { getRelativeAQI } from "../../utils/aqi";
import { Synth } from '../Synth';
import "./style.css";

export const Player = ({lnglat, aqi}) => {

    if (aqi) {
        console.log("The air quality values are: ", aqi)
        console.log("The air quality relative values are: ", getRelativeAQI(aqi))
    }

    return <div className="player-wrapper">
        <h2>Sound Vane<br/>{lnglat.lng}, {lnglat.lat}<br/>15 Apr 2022</h2>
        <Synth />
    </div>
}
import React from "react";
import { getRelativeAQI } from "../../utils/aqi";
import { SheetMusic } from '../SheetMusic';
import { Synth } from '../Synth';
import { MetricsAQI } from '../MetricsAQI';
import "./style.css";

export const Player = ({lnglat, aqi}) => {

    if (aqi) {
        console.log("The air quality values are: ", aqi)
        console.log("The air quality relative values are: ", getRelativeAQI(aqi))
    }

    return <div className="player-wrapper">
        {aqi && 
            <>
                <SheetMusic RelativeAQI={getRelativeAQI(aqi)} />
                <MetricsAQI aqi={aqi} />
                <Synth RelativeAQI={getRelativeAQI(aqi)} />
            </>
        }
    </div>
}
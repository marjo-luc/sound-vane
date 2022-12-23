import React from "react";
import { getRelativeAQI } from "../../utils/aqi";
import { SheetMusic } from '../SheetMusic';
import { Synth } from '../Synth';
import "./style.css";

export const Player = ({lnglat, aqi}) => {

    if (aqi) {
        console.log("The air quality values are: ", aqi)
        console.log("The air quality relative values are: ", getRelativeAQI(aqi))
    }

    return <div className="player-wrapper">
        <div className="flex space-between">
            <div>
                <div>Los Angeles</div>
                <div>USA</div>
            </div>
            <div>15:08</div>
        </div>
        {/* <h2>{lnglat.lng}, {lnglat.lat}<br/>15 Apr 2022</h2> */}
        {aqi && 
            <>
                <SheetMusic />
                <Synth RelativeAQI={getRelativeAQI(aqi)} />
                <div className="flex key">
                    <div className="keyItem">
                        <div>CO</div>
                        <div>{aqi.co}</div>
                    </div>
                    <div className="keyItem">
                        <div>HUMIDITY</div>
                        <div>{aqi.humidity} hPa</div>
                    </div>
                    <div className="keyItem">
                        <div>O3</div>
                        <div>{aqi.o3}</div>
                    </div>
                    <div className="keyItem">
                        <div>PARTICLES</div>
                        <div>{aqi.pm25} PM (2.5)</div>
                    </div>
                </div>
            </>
        }
    </div>
}
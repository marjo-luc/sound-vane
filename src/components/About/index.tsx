import React from "react";
import { BasicButton } from "../Buttons";
import "./style.css";

export const About = ({ toggleAbout, setToggleAbout, setUserHasInteracted }) => {

    const handleClick = () => {
        setUserHasInteracted(true)
        setToggleAbout((current) =>(!current))
    }
    
    return (
        <div className="module">
            <p>Air quality you can hear.</p>
            <p>Sound Vane leverages utilities from the World Air Quality Index Project. To learn more about the project, make sure to visit their site here: https://aqicn.org/</p>
            <BasicButton onClick={handleClick} text="Listen" />
        </div>
    )
}
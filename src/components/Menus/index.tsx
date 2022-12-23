import React, { useState } from "react";
import { DataButton, ExpandLessButton, ExpandMoreButton, MusicNoteButton } from "../Buttons";
import { MetricsAQI } from "../MetricsAQI";
import { MusicAQIDetails } from "../MusicAQIDetails/MusicAQIDetails";
import { Player } from '../Player'
import "./style.css";

/**
 * The navbar component is displayed when the main menu is expanded.
 * It reveals tabs the user can navigate to get more detailed data.
 */
export const NavBar = ({ setIsExpanded, isExpanded, updateSelectedPage }) => {

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return <div className="nav-bar">
        {isExpanded ?
            <>
                <div>
                    <ExpandLessButton onClick={toggleExpand} />
                    <DataButton onClick={() => updateSelectedPage("data")}/>
                    <MusicNoteButton onClick={() => updateSelectedPage("music")} />
                </div>
            </> :
            <ExpandMoreButton onClick={toggleExpand} />}
    </div>
}


export const MainMenu = (props: any) => {

    const [isExpanded, setIsExpanded] = useState(false)
    const [selectedPage, updateSelectedPage] = useState("data")

    const getSelectedPage = () => {
        switch (selectedPage) {
            case "data": return <MetricsAQI aqi={props.aqi} />
            case "music": return <MusicAQIDetails />
            default: return <span>test 2</span>
        }
    }

    return <div className={isExpanded ? "main-menu main-menu-expand" : "main-menu main-menu-contract"}>
        <NavBar setIsExpanded={setIsExpanded} isExpanded={isExpanded} updateSelectedPage={updateSelectedPage}/>
        {isExpanded ? getSelectedPage() : <Player lnglat={props.lnglat} aqi={props.aqi} />}
    </div>
}
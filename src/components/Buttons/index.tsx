import React from "react";
import { Button } from "react-bootstrap";
import { MdMusicNote, MdExpandMore, MdExpandLess } from "react-icons/md";
import { TbChartDots } from "react-icons/tb"
import "./style.css";


export const BasicButton = (props: any) => {
    return <Button className="margin-5px" onClick={props.onClick}>{props.text}</Button>
}

export const PlayButton = (props: any) => {
    return <Button className="play-button" onClick={props.onClick}></Button>
}

export const MusicNoteButton = (props: any) => {
    return <Button className="icon-button" onClick={props.onClick}><MdMusicNote size={20} /></Button>
}

export const ExpandMoreButton = (props: any) => {
    return <Button className="icon-button" onClick={props.onClick}><MdExpandLess size={20} /></Button>
}

export const ExpandLessButton = (props: any) => {
    return <Button className="icon-button" onClick={props.onClick}><MdExpandMore size={20} /></Button>
}

export const DataButton = (props: any) => {
    return <Button className="icon-button" onClick={props.onClick}><TbChartDots size={20} /></Button>
}
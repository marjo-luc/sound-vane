import React from "react";
import { Button } from "react-bootstrap";
import "../../index.css";
import "./style.css";


export const ExpandButton = () => {
    // TODO: flush out behavior
    return <Button>Expand</Button>
}

export const BasicButton = (props: any) => {
    return <Button className="margin-5px" onClick={props.onClick}>{props.text}</Button>
}
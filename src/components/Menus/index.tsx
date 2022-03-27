import React from "react";
import { Synth } from '../Synth';
import { AddressInput } from "../TextInput";
import "./style.css";

export const MainMenu = () => {
    return <div className="menu-wrapper">
        <div className="main-menu">
            <Synth />
            <AddressInput />
        </div>
    </div>
}
import React from "react";
import { AddressInput } from "../TextInput";
import "./style.css";

export const MainMenu = () => {
    return <div className="menu-wrapper">
        <div className="main-menu">
            <AddressInput />
        </div>
    </div>
}
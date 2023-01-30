import React from "react";

import "./style.css";

export const Header = () => {

    return (
        <header>
            <a href="./">
                <div className="logo">
                    <img src="/logo.svg" alt="" />
                </div>
            </a>
        </header>
    )
}
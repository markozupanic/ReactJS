import React from "react";

import logo from "../../logo.svg"


export default function Header(props)
{


    const {children}=props;

    return (
        <header>
            <div className="logo">
                <img src={logo}  className="App-logo"  />
            </div>
            <div className="App-title">
                Ai centar Lipik
            </div>
            <div className="menu">
                {children}

            </div>

        </header>
    )
}

















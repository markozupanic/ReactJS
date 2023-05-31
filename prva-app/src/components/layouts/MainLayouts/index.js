import React, { Children } from "react";
import Header from "../../header";
import Footer from "../../footer";




export default function MainLayout(props)
{
    const {children}=props
    return (
        <>
        <Header>
        <ul>
            <li><a href="#">Prijava</a></li>
            <li><a href="#">Registracija</a></li>
        </ul>
        </Header>
       
        <div className="content">
            {children}

        </div>
        <Footer/>
        </>
    )
}



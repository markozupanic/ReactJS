import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Container } from "reactstrap";

export default function MainLayout(props)
{
    const {children}=props
    return(
        <>
        <Header>
        </Header>
        <div className="content">
            <Container>
                {children}
            </Container>
            
        </div>
        <Footer/>

        </>
    )
}












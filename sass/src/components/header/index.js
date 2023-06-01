import React from "react";
import { Container, NavItem, NavLink, Navbar, NavbarBrand,Nav } from "reactstrap";


export default function Header()
{
    return(
    <header>
        <Container>
            <Navbar >
                <NavbarBrand href="/">
                    AI Centar Lipik
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Moje prijave</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Nova prijava</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Postavke</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
      </Container>

    </header>
    )
}








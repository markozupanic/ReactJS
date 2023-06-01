import React from "react";
import { Container, NavItem, NavLink, Navbar, NavbarBrand,Nav, Row ,Col} from "reactstrap";


export default function Footer()
{
    return(
        <footer>
            <Container>
                <Row>
                    <Col md="3">
                        <h1>Naslov</h1>
                        <p>NIvnilbanifldnibnadlbnldfn</p>

                    </Col>

                    <Col md="3">
                        <h1>Naslov</h1>
                        <p>NIvnilbanifldnibnadlbnldfn</p>

                    </Col>

                    <Col md="3">
                        <h1>Naslov</h1>
                        <p>NIvnilbanifldnibnadlbnldfn</p>

                    </Col>

                    <Col md="3">
                        <h1>Naslov</h1>
                        <p>NIvnilbanifldnibnadlbnldfn</p>

                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                     <Nav>
                        <NavItem>
                            <NavLink href="#">Uvjeti korištenja</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Uvjeti korištenja</NavLink>
                        </NavItem>
                     </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

















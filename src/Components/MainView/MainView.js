import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'
import {
    LinkContainer
} from 'react-router-bootstrap'
import ListingBase from "../ListingBase/ListingBase";

// import logo from './logo.svg'

const MainMenu = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                {/*<Link to="/"><img src={logo} style={{ height: 20 }} alt="sth"/></Link>*/}
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/AddForm">
                <NavItem>
                    Dodaj
                </NavItem>
            </LinkContainer>

            <LinkContainer to="/Search">
                <NavItem>Wyszukaj</NavItem>
            </LinkContainer>
            <LinkContainer to="/ListingBase">
                <NavItem>Wyświetl liste</NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>
)



export default MainMenu
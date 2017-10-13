import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  Button,
} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'
import {
  LinkContainer
} from 'react-router-bootstrap'
import ListingBase from "../ListingBase/ListingBase";

// import logo from './logo.svg'
import ShareButton from "../ShareButton/ShareButton"

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

        <LinkContainer to="/SearchForm">
          <NavItem>Wyszukaj</NavItem>
        </LinkContainer>
        <LinkContainer to="/ListingBase">
          <NavItem>Wyświetl całą liste</NavItem>
        </LinkContainer>
        <LinkContainer to="/Added">
          <NavItem>Ulubione</NavItem>
        </LinkContainer>
        <NavItem>
          <ShareButton/>
        </NavItem>
      </Nav>
    </Navbar>
)


export default MainMenu
import React from 'react'
import { connect } from 'react-redux'
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
import { signOut } from '../../state/auth'

// import logo from './logo.svg'
import ShareButton from "../ShareButton/ShareButton"

const MainMenu = props => (
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
        <LinkContainer to="/Groups">
          <NavItem>Grupy</NavItem>
        </LinkContainer>
        <LinkContainer to="/Added">
          <NavItem>Ulubione</NavItem>
        </LinkContainer>
        <NavItem onClick={props.signOutHelper}>Wyloguj</NavItem>
        <NavItem>
          <ShareButton/>
        </NavItem>
        <LinkContainer to="/EditProfile">
          <NavItem>Mój Profil</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
)
const mapDispatchToProps = dispatch => ({
  signOutHelper: () => dispatch(signOut())
})


export default connect(
    null,
    mapDispatchToProps
)(MainMenu)
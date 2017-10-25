import React from 'react'
import { connect } from 'react-redux'
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap'

import {withRouter} from 'react-router-dom'
import {
  LinkContainer
} from 'react-router-bootstrap'

import { signOut } from '../../state/auth'


import ShareButton from "../ShareButton/ShareButton"

const MainMenu = props => (
    <Navbar style={{BorderRadiusBottom:20}}>
      <Navbar.Header>
        <Navbar.Brand>
            {/*<Link to="/"><img src={logo} style={{ height: 20 }} alt="sth"/></Link>*/}
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/AddForm">
          <NavItem>Dodaj</NavItem>
        </LinkContainer>
        <LinkContainer to="/SearchForm">
          <NavItem>Wyszukaj</NavItem>
        </LinkContainer>
        <LinkContainer to="/Groups">
          <NavItem>Grupy</NavItem>
        </LinkContainer>
        <LinkContainer to="/MailingList">
          <NavItem>Lista wysyłkowa</NavItem>
        </LinkContainer>
        <LinkContainer to="/Added">
          <NavItem>Ulubione</NavItem>
        </LinkContainer>
        <LinkContainer to="/EditProfile">
          <NavItem>Mój Profil</NavItem>
        </LinkContainer>
        <NavItem onClick={props.signOutHelper}>Wyloguj</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <ShareButton/>
        </NavItem>
      </Nav>
    </Navbar>
)
const mapDispatchToProps = dispatch => ({
  signOutHelper: () => dispatch(signOut())
})


export default withRouter(connect(
    null,
    mapDispatchToProps
)(MainMenu))
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import MainMenu from './MainMenu'
import Brand from './Brand'

export default function NavigationBar(props) {
  return(
    <Navbar collapseOnSelect="true" expand="lg" bg="light" variant="light" fixed="top">
      <Container fluid>
        <Brand />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <MainMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



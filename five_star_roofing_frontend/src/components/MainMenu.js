import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { MdPhoneInTalk } from "react-icons/md";


export default function MainMenu() {
  return(
    <>
      <Nav className="ml-auto" >
        <Nav.Link 
          exact="true"
          as={Link}
          className="pz-menu__item"
          href="/"
          to="/">
          Home
        </Nav.Link>
        <Nav.Link 
          as={Link}
          className="pz-menu__item"
          href="/services"
          to="/services">
          Services
        </Nav.Link>
        <Nav.Link 
          as={Link}
          className="pz-menu__item"
          href="/gallery"
          to="/gallery">
          Gallery
        </Nav.Link>
        <Nav.Link 
          as={Link}
          className="pz-menu__item"
          href="/about"
          to="/about">
          About
        </Nav.Link>
        <Nav.Link 
          as={Link}
          className="pz-menu__item"
          href="/contact"
          to="/contact">
          Contact
        </Nav.Link>
        <a className="pz-menu__item pz-menu__item-dark" href="tel:00353873539296">
          <span>< MdPhoneInTalk /></span>
          <span>Emenrgency Repair</span>
        </a>
      </Nav>
  </>

  )
}

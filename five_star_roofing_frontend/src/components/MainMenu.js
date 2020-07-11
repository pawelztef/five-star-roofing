import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { MdPhoneInTalk } from "react-icons/md";


export default function MainMenu() {
  return(
    <Nav className="ml-auto">
      <NavLink 
        exact
        className="pz-menu__item"
        activeClassName="pz-menu__item-active"
        to="/">
        Home
      </NavLink>
      <NavLink 
        className="pz-menu__item"
        activeClassName="pz-menu__item-active"
        to="/services">
        Services
      </NavLink>
      <NavLink 
        className="pz-menu__item"
        activeClassName="pz-menu__item-active"
        to="/gallery">
        Gallery
      </NavLink>
      <NavLink 
        className="pz-menu__item"
        activeClassName="pz-menu__item-active"
        to="/about">
        About
      </NavLink>
      <NavLink 
        className="pz-menu__item"
        activeClassName="pz-menu__item-active"
        to="/contact">
        Contact
      </NavLink>
      <NavLink 
        className="pz-menu__item pz-menu__item-dark"
        activeClassName="pz-menu__item-active"
        to="/contact">
        < MdPhoneInTalk />
        Emergency Repair
      </NavLink>
    </Nav>



  )
}

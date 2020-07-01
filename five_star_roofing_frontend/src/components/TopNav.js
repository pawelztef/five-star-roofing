import React from 'react'
import { RiMapPin2Line, RiPhoneLine } from "react-icons/ri"

const Nav = styled.nav`
  font-size: .9rem;
  padding-top: 0.9em;
  padding-bottom: 0.9em;
`
const ContactDetials = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-grow: 2;
`

export default function TopNav() {
  return (
    <Nav className="pz-nav__top-row pz-invisible-md">
      <div className="pz-container-wrapper">
        <ContactDetials className="pz-nav__contact-details">
          <span>
            <RiMapPin2Line /> 8500, Lorem Street, Chicago, IL, 55030
          </span>
          <span>
            <RiPhoneLine /> 0 (800) 123-456
          </span>
        </ContactDetials>
      </div>
    </Nav>
  )
}

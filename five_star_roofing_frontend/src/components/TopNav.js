import React from 'react'
import { MdSmartphone, MdLocalPhone, MdPlace, MdAccessTime, MdEmail } from "react-icons/md"
import Brand from './Brand'
import NavButtons from './NavButtons'
import ContactDetails from './ContactDetails'

export default function TopNav() {
  return (
    <nav className="pz-nav__top-row">
        <div className="pz-container">
          <div className="pz-nav__top-row_content">
            <NavButtons />
            <Brand />
            <div className="pz-nav__top-row_contact-details-wrapper pz-invisible-md">
              <ContactDetails />
            </div>
          </div>
        </div>
    </nav>
  )
}

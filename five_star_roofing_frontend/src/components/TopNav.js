import React from 'react'
import { MdSmartphone, MdLocalPhone, MdPlace, MdAccessTime, MdEmail } from "react-icons/md"
import Brand from './Brand'
import ContactDetails from './ContactDetails'

export default function TopNav() {
  return (
    <nav className="pz-row pz-nav__top-row">
        <div className="pz-container">
          <div className="pz-nav__top-row_content">
            <Brand />
            <div className="pz-nav__top-row_contact-details-wrapper pz-invisible-md">
              <ContactDetails />
            </div>
          </div>
        </div>
    </nav>
  )
}

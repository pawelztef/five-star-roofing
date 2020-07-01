import React from 'react'
import { MdSmartphone, MdLocalPhone, MdPlace, MdAccessTime, MdEmail } from "react-icons/md"
import Brand from './Brand'

export default function TopNav() {
  return (
    <nav className="pz-row pz-nav__top-row">
        <div className="pz-container">
          <div className="pz-nav__top-row_content">
            <Brand />
            <div className="pz-nav__top-row_contact-details">
              <span>
                <MdPlace /> <a href="#">Dublin</a> | <MdEmail /> <a href="mailto: fivestarrroffig@gmail.com">fivestarrroffig@gmail.com</a>
              </span>
              <span>
                <MdSmartphone /> 24 Hour Service - <a href="tel:00353873539296">+353 (0)87 3539296</a> | <MdLocalPhone /> Office Line - <a href="tel:0035319120916">+353 (0)1 912 09 16</a>
              </span>
              <span>
                <MdAccessTime /> Mon - Sun: 24h
              </span>
            </div>
          </div>
        </div>
    </nav>
  )
}

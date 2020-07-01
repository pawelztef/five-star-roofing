import React from 'react'
import { RiMapPin2Line, RiPhoneLine } from "react-icons/ri"
import Brand from './Brand'

export default function TopNav() {
  return (
    <nav className="pz-nav__top-row">
      <div className="pz-container-wrapper">
        <div className="pz-container">
          <Brand />
          <div className="pz-nav__contact-details">
            <span>
              <RiMapPin2Line /> 8500, Lorem Street, Chicago, IL, 55030
            </span>
            <span>
              <RiPhoneLine /> 0 (800) 123-456
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

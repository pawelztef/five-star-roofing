import React from 'react'
import { RiMapPin2Line, RiPhoneLine, RiTimeLine } from "react-icons/ri"
import Brand from './Brand'

export default function TopNav() {
  return (
    <nav className="pz-row pz-nav__top-row">
        <div className="pz-container">
          <div className="pz-nav__top-row_content">
            <Brand />
            <div className="pz-nav__top-row_contact-details">
              <span>
                <RiMapPin2Line /> Dublin
              </span>
              <span>
                <RiPhoneLine /> 0873539296 | (01) 9120916
              </span>
              <span>
                <RiTimeLine /> Mon - Sun: 24h
              </span>
            </div>
          </div>
        </div>
    </nav>
  )
}

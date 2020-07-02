import React from 'react'
import Brand from './Brand'
import MainMenu from './MainMenu'
import SocialList from './SocialList'
import { RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom'


export default function MobileNav(props) {

  let mobileNavClasses = 'pz-nav__mobile-nav'


  if(props.show) {
    mobileNavClasses = 'pz-nav__mobile-nav open'
  }

  return(
    <div className={mobileNavClasses}>
      <ul className="pz-menu">
        <li className="pz-menu__item pz-menu__item-active"> 
          <Link to="/">Home</Link>
        </li>
        <li className="pz-menu__item"> 
          <Link to="/services">Services</Link>
        </li>
        <li className="pz-menu__item"> 
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="pz-menu__item">
          <Link to="/about">About</Link>
        </li>
        <li className="pz-menu__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

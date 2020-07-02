import React from 'react'
import {  MdLocalPhone, MdEmail } from "react-icons/md"

const navButtons = () => {
  return(
  <div className="pz-nav-buttons__wrapper">
    <div className="pz-nav-buttons__container">
      <a href="tel:"><MdLocalPhone />call us</a>
      <a href="mailto:"><MdEmail />email us</a>
    </div>
  </div>
  )
}

export default navButtons

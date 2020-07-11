import React from 'react'
import Brand from './Brand'
import ContactDetails from './ContactDetails'
import { MdPhoneInTalk } from "react-icons/md";


const footer = () => (
  <footer className="pz-footer__wrapper">
    <div className="pz-row">
      <div className="pz-footer">
        <div className="pz-footer__col-1">
          <p>
            If you are looking for a reliable and reputed roofing contractor in
            Ireland with a proven record delivering high quality workmanship at 
            affordable prices then you have come to the right place. Five Star Roofing
            is a leading roofing contractor in Ireland and has the expertise, experience 
            and professionalism accumulated over 20 years to execute projects undertaken 
            on time and within budget.
          </p>
        </div>

        <div className="pz-footer__col-2">
          <div className="pz-contact-details__wrapper">
            <ContactDetails />
          </div>
        </div>

        <div className="pz-footer__col-3">
          <div className="pz-footer__office-hours_wrapper">
            <div className="pz-footer__office-hours">
              <span><h6>Monday:</h6> 24h</span>
              <span><h6>Tuesday:</h6> 24h</span>
              <span><h6>Wednesday:</h6> 24h</span>
              <span><h6>Thursday:</h6> 24h</span>
              <span><h6>Friday:</h6> 24h</span>
              <span><h6>Saturday:</h6> 24h</span>
              <span><h6>Sunday:</h6> 24h</span>
            </div>
          </div>
        </div>
        <div className="pz-footer__col-4">
          <a className="pz-menu__item pz-menu__item-dark" href="tel:00353873539296">
            <span>< MdPhoneInTalk /></span>
          <span>Emenrgency Repair</span>
        </a>
      </div>
    </div>
  </div>
  <div className="pz-footer-meta">
    <span>
      Designed by <a href="https://pawelztef.me">IrishWebsites.ie</a>
    </span>
  </div>
</footer>
)

export default footer

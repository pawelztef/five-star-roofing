import React from 'react'
import Brand from './Brand'
import ContactDetails from './ContactDetails'


const footer = () => (
  <footer className="pz-footer__wrapper">
    <div className="pz-row">
      <div className="pz-container pz-footer">


        <div className="pz-footer__col-1">
          <Brand />
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

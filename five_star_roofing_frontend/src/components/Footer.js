import React from 'react'
import Brand from './Brand'


const footer = () => (
  <footer className="pz-footer__wrapper">
    <div className="pz-row">
      <div className="pz-container pz-footer">


        <div className="pz-footer__col-1">
          <Brand />
        </div>

        <div className="pz-footer__col-2">
          <address className='pz-contact-details'>
            <div>
              <h6>Address</h6>
              <span>8500, Lorem Street,</span>
              <span>Chicago, IL, 55030 </span>
            </div>
            <div>
              <h6>Email</h6>
              <span><a href="mailto:sales@example.com">sales@example.com</a></span>
            </div>
            <div>
              <h6>Phone</h6>
              <span><a href="tel:1234567890">(123) 456-78-90</a></span>
              <span><a href="tel:1234567890">(123) 456-78-90</a></span>
            </div>
          </address>
        </div>

        <div className="pz-footer__col-3">
          <div className="pz-opening-hours">
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
  </footer>
)

export default footer

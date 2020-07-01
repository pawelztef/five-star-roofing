import React from 'react'
import Brand from './Brand'


const footer = () => (
  <div class="pz-container-wrapper">
    <footer className="pz-footer">
      <div className="pz-footer__col-1">
        <address className='pz-contact-details'>
          <div className="pz-contact-details__address">
            <h6>Address</h6>
            <span>
              8500, Lorem Street,
            </span>
            <span>
              Chicago, IL, 55030
            </span>
          </div>
          <div className="pz-contact-details__email">
            <h6>Email</h6>
            <span>
              <a href="mailto:sales@example.com">sales@example.com</a>
            </span>
          </div>
          <div className="pz-contact-details__phone">
            <span>
              <h6>Phone</h6>
              <a href="tel:1234567890">(123) 456-78-90</a>
            </span>
            <span>
              <a href="tel:1234567890">(123) 456-78-90</a>
            </span>
          </div>
        </address>
      </div>
      <div className="pz-footer__col-2">
        <Brand />
        <div className="pz-footer-meta">
          <span>
            <a href="https://pawelztef.me">Pawelztef</a>© 2020
          </span>
          <span>
            All rights reserved
          </span>
        </div>
      </div>
      <div className="pz-footer__col-3">
        <div className="pz-footer__legal">
          <span className="pz-footer__legal-item">
            <a href="http://pawelztef.me">Privacy Policy</a>
          </span>
          <span className="pz-footer__legal-item">
            <a href="http://pawelztef.me">Cookies Policy</a>
          </span>
          <span className="pz-footer__legal-item">
            <a href="http://pawelztef.me">Terms And Conditions</a>
          </span>
          <span className="pz-footer__legal-item">
            <a href="http://pawelztef.me">Refund Policy</a>
          </span>
        </div>
      </div>
    </footer>
  </div>
)

export default footer

import React from 'react'
import { MdSmartphone, MdLocalPhone, MdPlace, MdAccessTime, MdEmail } from "react-icons/md"

const contactDetails = () => (
  <div className="pz-contact-details">
    <div className="pz-contact-details-item">
      <span>
        <MdPlace /> <a href="#">Dublin</a> 
      </span>
    </div>
    <div className="pz-contact-details-item">
      <span>
        <MdEmail /> <a href="mailto: fivestarrroffig@gmail.com">fivestarrroffig@gmail.com</a>
      </span>
    </div>
    <div className="pz-contact-details-item">
      <span>
        <MdSmartphone /> 24 Hour Service - <a href="tel:00353873539296">+353 (0)87 3539296</a> 
      </span> 

    </div>
    <div className="pz-contact-details-item">
      <span>
        <MdLocalPhone /> Office Line - <a href="tel:0035319120916">+353 (0)1 912 09 16</a>
      </span>
    </div>
    <div className="pz-contact-details-item">
      <span>
        <MdAccessTime /> Mon - Sun: 24h
      </span>
    </div>
  </div>
)

export default contactDetails


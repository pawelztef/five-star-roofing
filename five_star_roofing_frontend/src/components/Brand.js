import React from 'react'

export default function Brand(props) {
  return(
  <a className="pz-nav__brand"
    href={process.env.REACT_APP_DOMAIN}>
    <img className="pz-nav__brand-img" 
      src="images/logo-small.png"
      alt="Five Star Roofing Logo" />
  </a>
  )
}

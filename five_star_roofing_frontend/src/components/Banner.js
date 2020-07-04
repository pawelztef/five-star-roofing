import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner = (props) => {
  return(
    <div className="pz-banner__wrapper">
      <div className="pz-container pz-banner__container">
        <h1 className="pz-banner__title">
          {props.bannerTitle}
        </h1>
        <p className="pz-banner__subtitle">
          {props.bannerSubtitle}
        </p>
        <NavLink 
          exact
          className="pz-banner__button"
          to={props.bannerLink}>
          {props.bannerCallToAction}
        </NavLink>
      </div>
    </div>
  )
}

export default Banner 

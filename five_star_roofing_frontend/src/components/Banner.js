import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner = (props) => {
  return(

    <div className="pz-banner__wrapper"
      style={{
       backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.4)), url(${props.bannerImage})`
      }}
    >

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

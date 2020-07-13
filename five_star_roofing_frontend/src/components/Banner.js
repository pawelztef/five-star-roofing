import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner = (props) => {
  return(

  <div className="pz-banner__wrapper"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${props.bannerImage})`
    }} >

      <div className="pz-container pz-banner__container">
        {props.bannerTitle && 
          <h1 className="pz-banner__title">
            {props.bannerTitle}
          </h1>
        }
        {props.bannerSubtitle &&
          <p className="pz-banner__subtitle-simple">
            {props.bannerSubtitle}
          </p>
        }

        {props.displayButton && 
          <div className="pz-banner__link-wrapper">
            <a className="pz-banner__link" href="">01 9120916</a>
            <a className="pz-banner__link" href="">087 3539296</a>
          </div>
        }

      </div>


  </div>

  )
}

export default Banner 

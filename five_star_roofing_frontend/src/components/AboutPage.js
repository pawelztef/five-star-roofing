import React from 'react'
import Banner from './Banner'
import BackgroundImage from '../assets/images/banner-bg.jpg'

class AboutPage extends React.Component{
  render(){
    return(
      <>
        <Banner 
          bannerTitle="Five Star Roofing provide best quality service around Dublin"
          bannerSubtitle="ask for more details"
          bannerCallToAction="Request a free quote"
          bannerLink="/contact"
          bannerImage={BackgroundImage}
        />
      </>
    )
  }
}

export default AboutPage

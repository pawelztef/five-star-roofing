import React from 'react'
import Banner from './Banner'
import Services from './Services'
import EmptySpace from './EmptySpace'
import BackgroundImage from '../assets/images/banner-bg.jpg'

class ServicesPage extends React.Component{
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

      <Services />

      </>
    )
  }
}

export default ServicesPage

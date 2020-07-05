import React from 'react'
import Banner from './Banner'
import CardsWidget from './CardsWidget'
import BackgroundImage from '../assets/images/banner-bg.jpg'

class HomePage extends React.Component{
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

      <CardsWidget />

      </>
    )
  }
}

export default HomePage

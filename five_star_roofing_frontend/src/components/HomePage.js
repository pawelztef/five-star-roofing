import React from 'react'
import Banner from './Banner'


class HomePage extends React.Component{
  render(){
    return(
      <>

      <Banner 
        bannerTitle="Five Star Roofing provide best quality service around Dublin"
        bannerSubtitle="ask for more details"
        bannerCallToAction="Request a free quote"
        bannerLink="/contact"
      />

      </>
    )
  }
}

export default HomePage

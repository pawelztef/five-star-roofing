import React from 'react'
import Banner from './Banner'
import CardsWidget from './CardsWidget'
import Welcome from './Welcome'
import ServicesExcerpt from './ServicesExcerpt'
import Partners from './Partners'
import ContactBanner from './ContactBanner'
import BackgroundImage from '../assets/images/new-bg.jpeg'

class HomePage extends React.Component{
  render(){
    return(
      <>

      <Banner 
        bannerTitle="NEW ROOFS & TILING"
        bannerSubtitle="Reliable and Reputed Roofing Contractor in Ireland"
        bannerImage={BackgroundImage}
      />

      <CardsWidget />

      <Welcome />
      
      <ServicesExcerpt />

      <ContactBanner />

      <Partners />


      </>
    )
  }
}

export default HomePage

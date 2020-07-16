import React from 'react'
import Banner from './Banner'
import Services from './Services'
import EmptySpace from './EmptySpace'
import BackgroundImage from '../assets/images/new-bg.jpeg'
import ContactBanner from './ContactBanner'
import WhyUs from './WhyUs'
import CTABanner from './CTABanner'
import ContactFormBanner from './ContactFormBanner'

class ServicesPage extends React.Component{
  render(){
    return(
      <div className="pz-services__page">


      <div className="pz-services__page-banner-wrapper">
        <Banner 
          bannerTitle="Services"
          bannerSubtitle="Five Star Roofing Reliable and Reputed Roofing Contractor in Ireland"
          bannerImage={BackgroundImage} />
        <CTABanner />
      </div>
      <EmptySpace />

      <Services />


      <WhyUs />

      <EmptySpace />
      <ContactFormBanner />
    </div>
    )
  }
}

export default ServicesPage

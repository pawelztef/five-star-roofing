import React from 'react'
import Banner from './Banner'
import Services from './Services'
import EmptySpace from './EmptySpace'
import BackgroundImage from '../assets/images/new-bg.jpeg'
import ContactBanner from './ContactBanner'
import WhyUs from './WhyUs'
import CTABanner from './CTABanner'

class ServicesPage extends React.Component{
  render(){
    return(
      <div className="pz-services__page">


      <div className="pz-services__page-banner-wrapper">
        <Banner 
          bannerTitle="Services"
          bannerImage={BackgroundImage} />
        <CTABanner />
      </div>
      <EmptySpace />

      <Services />

      <ContactBanner />

      <WhyUs />

    </div>
    )
  }
}

export default ServicesPage

import React from 'react'
import Banner from './Banner'
import BackgroundImage from '../assets/images/new-bg.jpeg'
import CTABanner from './CTABanner'
import AboutUsBanner from './AboutUsBanner'
import EmptySpace from './EmptySpace'
import Curriculum from './Curriculum'
import ContactFormBanner from './ContactFormBanner'

class AboutPage extends React.Component{
  render(){
    return(
      <>
        <div className="pz-services__page-banner-wrapper">
          <Banner 
            bannerTitle="About Us"
            bannerSubtitle="Five Star Roofing Reliable and Reputed Roofing Contractor in Ireland"
            bannerImage={BackgroundImage} />
          <CTABanner />
        </div>
        <EmptySpace />
        <Curriculum />
        <EmptySpace />
        <AboutUsBanner />
        <ContactFormBanner />
      </>
    )
  }
}

export default AboutPage

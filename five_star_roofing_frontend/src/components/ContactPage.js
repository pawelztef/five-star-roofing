import React from 'react'
import Banner from './Banner'
import BackgroundImage from '../assets/images/new-bg.jpeg'
import ContactForm from './ContactForm'
import EmptySpace from './EmptySpace'
import Section from './Section'
import ContactDetails from './ContactDetails'
import GoogleMap from './GoogleMap'
class ContactPage extends React.Component{
  render(){
    const title = "Get a quote from Five Star Roofing"

    return(
      <div className="pz-contact-us" >

        <Banner 
          bannerTitle="Contact Us"
          bannerSubtitle="Five Star Roofing Reliable and Reputed Roofing Contractor in Ireland"
          bannerImage={BackgroundImage}
          displayButton
        />


      <Section 
        title={title}
        background="white">
        <ContactDetails />
        <ContactForm />
      </Section>

      <GoogleMap />
    </div>
    )
  }
}

export default ContactPage

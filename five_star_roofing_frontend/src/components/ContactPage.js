import React from 'react'
import Banner from './Banner'
import BackgroundImage from '../assets/images/new-bg.jpeg'
import ContactForm from './ContactForm'
import EmptySpace from './EmptySpace'
import Section from './Section'
import ContactDetails from './ContactDetails'
class ContactPage extends React.Component{
  render(){
    return(
      <div className="pz-contact-us" >

          <Banner 
            bannerTitle="Contact Us"
            bannerSubtitle="Five Star Roofing Reliable and Reputed Roofing Contractor in Ireland"
            bannerImage={BackgroundImage}
            displayButton
          />


        <Section background="white">
          <ContactDetails />
          <ContactForm />
        </Section>

      </div>
    )
  }
}

export default ContactPage

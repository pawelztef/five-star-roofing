import React from 'react'
import Banner from './Banner'
import BackgroundImage from '../assets/images/banner-bg.jpg'
import ContactForm from './ContactForm'
import EmptySpace from './EmptySpace'
import Section from './Section'
import ContactDetails from './ContactDetails'
class ContactPage extends React.Component{
  render(){
    return(
      <div className="pz-contact-us" >

      <Banner 
        bannerImage={BackgroundImage}
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

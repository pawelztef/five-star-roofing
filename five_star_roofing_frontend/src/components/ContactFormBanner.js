import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'
import ContactForm from './ContactForm'


class AboutUsBanner extends React.Component {
  render(){
    return(
      <div className="pz-banner-form__wrapper">
        <Section 
          title="Get a Quote Today"> 
          <ContactForm />
        </Section>
      </div>
    )
  }
}

export default AboutUsBanner

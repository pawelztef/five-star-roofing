import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'
import ContactForm from './ContactForm'
class GetQuote extends React.Component {
  render(){

    return(
      <div className="pz-quote__wrapper">
        <Section background="white"> 
          <ContactForm />
        </Section>
      </div>
    )
  }
}

export default GetQuote

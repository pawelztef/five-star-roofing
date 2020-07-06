import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'
class ContactBanner extends React.Component {
  render(){
    const objects = [
      {
        title: "contact info",
        content: "If you would like to learn more about the full variety of roofing products and services available from the crew at Global Roofing, please do not hesitate to get in contact with one of our members of staff, who will be more than happy to assist you with any queries you may have regarding our products.<br /> <h2>Call Us Today <a href='tel:00353873539296'>+353 (0)87 3539296</a></h2>"
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })


    return(
      <div className="pz-contact-banner__wrapper">
        <Section> 
          { cards }
        </Section>
      </div>
    )
  }
}

export default ContactBanner

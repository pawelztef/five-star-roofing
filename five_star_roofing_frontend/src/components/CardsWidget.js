import React from 'react'
import Banner from './Banner'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'

class CardsWidget extends React.Component {
  render(){
    const objects = [
      {
        icon: "medal-line.svg",
        title: "Quality Services",
        content: "Each of our services are completed by a team of professional tradesmen who are all fully qualified"
      },
      {
        icon: "money-euro-circle-line.svg",
        title: "Best Prices",
        content: "Here at Five Star Roofing we have a wide range of services all available for a competitive price"
      },
      {
        icon: "shield-star-line.svg",
        title: "Trustworthy Staff",
        content: "Five Star Roofing is a member of the National Guild of Master Craftsman, our roofers can be trusted"
      },
      {
        icon: "worker.svg",
        title: "Experienced Team",
        content: "Our team here at Five Star Roofing have multiple years of practical experience within this industry"
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    return(
      <div className="pz-cards-widget">
        <Section small>
          { cards }
        </Section>
      </div>
    )
  }
}

export default CardsWidget

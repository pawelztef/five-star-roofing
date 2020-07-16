import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'
class AboutUsBanner extends React.Component {
  render(){
    const objects = [
      {
        icon: "worker-dark.svg",
        title: "Experienced Team",
        content: "Our team here at Five Star Roofing have multiple years of practical experience within this industry"
      },
      {
        icon: "shield-star-line-dark.svg",
        title: "Trustworthy Staff",
        content: "Five Star Roofing is a member of the National Guild of Master Craftsman, our roofers can be trusted"
      },
      {
        icon: "medal-line-dark.svg",
        title: "Quality Services",
        content: "Each of our services are completed by a team of professional tradesmen who are all fully qualified"
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })


    return(
      <div className="pz-about-us-banner__wrapper">
        <Section 
          small
          title="Your Expert Service for All Apsects of Roofing"> 
          { cards }

        </Section>
      </div>
    )
  }
}

export default AboutUsBanner

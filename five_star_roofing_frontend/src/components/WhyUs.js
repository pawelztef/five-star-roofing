import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'

class WhyUs extends React.Component {
  render(){
    const objects = [
      {
        content: "<span>Expert advice from highly qualified roofers</span><span>Low prices, friendly service and reliable staff</span><span>Free no obligation quotations</span><span>Minimum 10 Year Guarantee with every job</span>" 
      },
      {
        content: "<span>More than 25 years of experience in the field</span><span>Excellent reviews and multiple recommendations</span><span>Fully insured</span><span>You only pay once the job is completed</span>"
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    const title = "why choose us?"

    return(
      <div className="pz-why-us__wrapper">
        <Section 
          small 
          title={title}>
          { cards }
        </Section>
      </div>
    )
  }
}

export default WhyUs

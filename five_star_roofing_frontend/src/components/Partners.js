import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'

class Partners extends React.Component {
  render(){
    const objects = [
      {
        icon: "partner1.png"
      },
      {
        icon: "partner2.png"
      },
      {
        icon: "partner3.png"
      },
      {
        icon: "partner4.jpg"
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    const title = "Our Partners"

    return(
      <div className="pz-partners__wrapper">
        <Section 
          small 
          title={title}>
          { cards }
        </Section>
      </div>
    )
  }
}

export default Partners

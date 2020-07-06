import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'

class ServicesExcerpt extends React.Component {
  render(){
    const objects = [
      {
        icon: "new-roof.jpg",
        content: "<span>New roof installation</span><span>Roof & attic insulation</span><span>Fascia & sofit</span><span>Tiling & slating</span>"
      },
      {
        icon: "flat-roof.jpg",
        content: "<span>Roof repairs & replacements</span><span>Home maintenance & restorations</span><span>Flat roof repair</span><span>Asbestos removal</span>"
      },
      {
        icon: "gutters.png",
        content: "<span>Gutter instalations & repairs</span><span>PVC Dowpipes</span><span>Chimney repairs</span><span>Felt roofs</span>"
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    const title = "Services"

    return(
      <div className="pz-services-excerpt__wrapper">
        <Section 
          small 
          title={title}>
          { cards }
        </Section>
      </div>
    )
  }
}

export default ServicesExcerpt

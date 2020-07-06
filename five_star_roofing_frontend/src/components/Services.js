import React from 'react'
import Banner from './Banner'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'


class Services extends React.Component {
  render(){
    const objects = [
      {
        icon: "pitched-roof.svg",
        title: "Pitched Roofs",
        content: "Whether you’re looking for a completely new pitched-roof, or repair to an existing one, we guarantee a sound service from start to finish"
      },
      {
        icon: "flat-roof.svg",
        title: "Flat Roofs",
        content: "We have expert knowledge in high performance roofing systems including single ply roofing, traditional felt and fiberglass roofing" 
      },
      {
        icon: "felt-roof.svg",
        title: "Felt Roofs",
        content: "We can install polymer modified mastic asphalt, built up felt roofing systems, single membrane, hot melt rubber such as permaquik 6100 liquid plastic roofing"
      },
      {
        icon: "tiling-roof.svg",
        title: "Tiling and Slating",
        content: "We have installed the following roof coverings: Cotswold stone slates, Collyweston stone slates, Hamstone slates, Purbeck stone slates, Clay and more"
      },
      {
        icon: "tools.svg",
        title: "Gutter Repair",
        content: "We can assess the condition of the gutters to determine if there is any minor work required, which could include repairs such as leaking gutter joints"
      },
      {
        icon: "roof-maintenance.svg",
        title: "Roof Maintenance",
        content: "With the right maintenance, a roof can last a lifetime. Regular cleaning and inspections allow for any problems to be spotted early and dealt with quickly and easily"
      },
      {
        icon: "tools-2.svg",
        title: "Roof Repair",
        content: "Our roof engineers have a keen eye for spotting potential problems. As a result we can act quickly before damp or mould becomes a serious problem"
      },
      {
        icon: "roof-insulation.svg",
        title: "Roof Insulations",
        content: " A lot of heat escapes through the roof therefore it’s wise to make sure that you take actions to keep it in saving massive quantities on your bills."
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    const title = "That is what we do best"

    return(
      <Section 
        small 
        title={title}
        background="white">
        { cards }
      </Section>
    )
  }
}

export default Services

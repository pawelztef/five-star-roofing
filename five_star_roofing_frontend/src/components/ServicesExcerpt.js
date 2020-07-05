import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'

class ServicesExceprt extends React.Component {
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
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    return(
      <div className="pz-services-exceprt__wrapper">
        <EmptySpace small />
        <h1 className="pz-services-exceprt__title">Services</h1>
        <EmptySpace small />
        <div className="pz-services-exceprt__row">
          <div className="pz-container">
            { cards }
          </div>
        </div>
        <EmptySpace small />
      </div>
    )
  }
}

export default ServicesExceprt

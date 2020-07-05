import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'

class ServicesExceprt extends React.Component {
  render(){
    const objects = [
      {
        icon: "instalation.jpg",
        content: "<li><li>List item</li></li>"
      },
      {
        icon: "flat-roof.jpg",
        content: ""
      },
      {
        icon: "instalation2.jpg",
        content: ""
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    return(
      <div className="pz-services-excerpt__wrapper">
        <EmptySpace small />
        <h1 className="pz-services-excerpt__title">Services</h1>
        <EmptySpace small />
        <div className="pz-services-excerpt__row">
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

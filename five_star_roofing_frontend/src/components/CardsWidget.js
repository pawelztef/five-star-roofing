import React from 'react'
import Banner from './Banner'
import EmptySpace from './EmptySpace'
import Card from './Card'

class CardsWidget extends React.Component {
  render(){
    const objects = [
      {
        icon: "money-euro-circle-line.svg",
        title: "Competetive Prices",
        content: "Sit cupiditate at quisquam ducimus culpa quis Nam sapiente suscipit"
      },
      {
        icon: "money-euro-circle-line.svg",
        title: "Competetive Prices",
        content: "Sit cupiditate at quisquam ducimus culpa quis Nam sapiente suscipit"
      },
      {
        icon: "money-euro-circle-line.svg",
        title: "Competetive Prices",
        content: "Sit cupiditate at quisquam ducimus culpa quis Nam sapiente suscipit"
      },
      {
        icon: "money-euro-circle-line.svg",
        title: "Competetive Prices",
        content: "Sit cupiditate at quisquam ducimus culpa quis Nam sapiente suscipit"
      }
    ]

    const cards = objects.map((obj) => {
      return(
        <Card card={obj} />        
      )
    })

    return(
      <div className="pz-widget__wrapper">
        <EmptySpace small />
        <div className="pz-widget__row">
          <div className="pz-container">
            { cards }
          </div>
        </div>
        <EmptySpace small />
      </div>
    )
  }
}

export default CardsWidget

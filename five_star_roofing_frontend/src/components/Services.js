import React from 'react'
import Banner from './Banner'
import EmptySpace from './EmptySpace'
import Card from './Card'

class Services extends React.Component {
  render(){
    const objects = [
      {
        icon: "money-euro-circle-line.svg",
        title: "Best Prices",
        content: "Here at Five Star Roofing we have a wide range of services all available for a competitive price"
      },
      {
        icon: "worker.svg",
        title: "Experienced Team",
        content: "Our team here at Five Star Roofing have multiple years of practical experience within this industry"
      },
      {
        icon: "shield-star-line.svg",
        title: "Trustworthy Staff",
        content: "Five Star Roofing is a member of the National Guild of Master Craftsman, our roofers can be trusted"
      },
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
        icon: "worker.svg",
        title: "Experienced Team",
        content: "Our team here at Five Star Roofing have multiple years of practical experience within this industry"
      },
      {
        icon: "shield-star-line.svg",
        title: "Trustworthy Staff",
        content: "Five Star Roofing is a member of the National Guild of Master Craftsman, our roofers can be trusted"
      },
      {
        icon: "medal-line.svg",
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
      <div className="pz-services__wrapper">
        <EmptySpace small />
        <h1 className="pz-services__title">That is what we do best</h1>
        <EmptySpace small />
        <div className="pz-services__row">
          <div className="pz-container">
            { cards }
          </div>
        </div>
        <EmptySpace small />
      </div>
    )
  }
}

export default Services

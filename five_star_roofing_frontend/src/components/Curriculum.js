import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'
import DecoLine from './DecoLine'

class Curriculum extends React.Component {
  render(){

    return(
      <div className="pz-curriculum__wrapper">
        <h1 className="pz-section__title">Our Story</h1>
        <DecoLine marginBottom={40} width={150} className="pz-decoline" />
        <EmptySpace  
          small
          className="pz-empty-space"/>
        <EmptySpace small />
        <div className="pz-container">
          <div className="pz-curriculum__column">
            <h4 className="pz-curriculum__title">Five Star Roofing</h4>
            <DecoLine />
            <p className="pz-curriculum__content">
              Five Star Roofing prides on being a leader in this industry. We have been around 
              for more than 20 years, are a local family owned business, and offer a wide 
              range of services. We rely on dedicated specialists who possess lots of hands-on
              experience to tackle any job. You should talk to us for any roofing job 
              whether new installation, flat roof, pitched roof, or any work on the chimney, fascia, soffit, or gutter.
              We provide our services throughout Ireland.
            </p> 
            <p className="pz-curriculum__content">
              <span>
                Send us an email at <a href="mailto: info@fivestarroofing.ie">info@fivestarroofing.ie</a>
              </span>
              <span>
                or call us on 24 Hour Service - <a href="tel:00353873539296">+353 (0)87 3539296</a>
              </span>
              <span>
                Office Line - <a href="tel:0035319120916">+353 (0)1 912 09 16</a>
              </span>
              <span>
                You can also get free quote through our webiste <a href="/conact">form.</a>
              </span>
            </p>
          </div>
          <div className="pz-curriculum__column">
            <img className="pz-curriculum__image" src={require("../assets/images/about-us-curriculum.jpeg")} alt="" />
          </div>
        </div>
        <EmptySpace small />
      </div>
    )
  }
}

export default Curriculum

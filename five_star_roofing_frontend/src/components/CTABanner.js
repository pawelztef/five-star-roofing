import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import Section from './Section'
import { Link } from 'react-router-dom'

class CTABanner extends React.Component {
  render(){


    const title = "Do You Have A Project We Can Help With?"

    return(
      <div className="pz-cta__wrapper">
        <Section small
          title={title}>
          <Link to="/contact" className="pz-cta__link">Get a free Quote</Link>
        </Section>
      </div>
    )
  }
}

export default CTABanner

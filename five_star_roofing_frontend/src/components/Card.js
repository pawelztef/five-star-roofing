import React from 'react'
import parse from 'html-react-parser'


class Card extends React.Component {

  constructor(props) {
    super(props)
    let image
    if(props.card.icon) {
        try {
          image = require(`../assets/images/${props.card.icon}`)
        } catch (e) {
          console.log("Error card", e)
        }
    }
    this.state = {
      img: image,
      title: props.card.title,
      content: props.card.content
    }
  }


  render() {
    return(
      <div className="pz-card-wrapper" >
        <div className="pz-card__item">
          { this.state.img &&
          <img src={this.state.img} className="pz-card__image" /> 
        }
        { this.state.title &&
        <h5 className="pz-card__title">{this.props.card.title}</h5>
        }
        { this.state.content &&
        <p className="pz-card__content">
          {parse(this.state.content)}
        </p>
        }

      </div>
    </div>
    )
  }
}

export default Card

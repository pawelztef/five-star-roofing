import React from 'react'

const Card = (props) => {
  let img
  try {
    img = require(`../assets/images/${props.card.icon}`)
  } catch (e) {
    console.log(e)
  }
  return(
   <div className="pz-card-wrapper" >
     <div className="pz-card__item">

        { img &&
        <img src={img} className="pz-card__image" /> 
        }
        { props.card.title &&
          <h5 className="pz-card__title">{props.card.title}</h5>
        }
        { props.card.content &&
          <p className="pz-card__content">
            {props.card.content}
          </p>
        }

      </div>
   </div>
  )
}

export default Card

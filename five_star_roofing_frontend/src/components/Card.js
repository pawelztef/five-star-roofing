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
     <div className="pz-widget__card">

        { img &&
        <img src={img} /> 
        }
        { props.card.title &&
          <h6 className="pz-widget__title">{props.card.title}</h6>
        }
        { props.card.content &&
          <p className="pz-widget__content">
            {props.card.content}
          </p>
        }

      </div>
   </div>
  )
}

export default Card

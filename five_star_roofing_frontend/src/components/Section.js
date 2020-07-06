import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'

const section = (props) => {
    const bg = props.background
    return(
      <div className="pz-section__wrapper" style={{background: bg}}>
        <EmptySpace  small={props.small}/>
        {props.title &&
          <>
            <h1 className="pz-section__title">{props.title}</h1>
            <EmptySpace small />
          </>
        }
        <div className="pz-section__row">
          <div className="pz-container">
            { props.children }
          </div>
        </div>
        <EmptySpace small={props.small}  />
      </div>
    )
}

export default section

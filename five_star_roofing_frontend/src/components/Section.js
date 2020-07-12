import React from 'react'
import EmptySpace from './EmptySpace'
import Card from './Card'
import DecoLine from './DecoLine'

const section = (props) => {
    const bg = props.background
    return(
      <div className="pz-section__wrapper" style={{background: bg}}>
        <EmptySpace  small={props.small}/>
        {props.title &&
          <>
            <h1 className="pz-section__title">{props.title}</h1>
            <DecoLine marginBottom={40} width={150} />
            <EmptySpace small />
          </>
        }
        {props.subtitle &&
           <p className="pz-section__subtitle">{props.subtitle}</p>
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

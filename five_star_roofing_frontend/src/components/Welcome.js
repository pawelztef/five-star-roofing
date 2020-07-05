import React from 'react'
import EmptySpace from './EmptySpace'

const Welcome = () => {
  return(
   <div className="pz-welcome-wrapper" >
        <EmptySpace small />
        <h1 className="pz-welcome__title">Welcome to Five Star Roofing</h1>
        <EmptySpace small />
        <div className="pz-welcome__row">
          <div className="pz-container">
          </div>
        </div>
        <EmptySpace small />
     
   </div>
  )
}

export default Welcome

import React from 'react'
import EmptySpace from './EmptySpace'

const Welcome = () => {
  return(
   <div className="pz-welcome__wrapper" >
        <EmptySpace small />
        <EmptySpace small />
        <div className="pz-welcome__row">
          <div className="pz-container">
            <h1 className="pz-welcome__title">Welcome to Five Star Roofing</h1>
            <p className="pz-welcome__content">
              Five Star Roofing provides a superior range of roofing services throughout Dublin 
              and the surrounding regions. As specialists in many areas in our industry, we 
              consistently strive to deliver high quality roofs at competitive rates for 
              both domestic and commercial customers. At Five Star Roofing, we have a wealth 
              of experience in the roofing industry.<br /><br /> Over time we have gathered vital 
              experience in every aspect of roofing possible, regardless of what your idea 
              is for a new roof, repair or restoration, Five Star Roofing can capably cater 
              for all your roofing requirements. All of our work is fully insured and you 
              can rest assured that our vast years of experience in the industry has given 
              us an excellent range of know-how and experience in all capacities of roofing.<br /><br />
              With an expert crew of over 10, we have widespread knowledge and experience in 
              the industry and can provide guidance on all facets of roofing & roofing 
              materials. Five Star Roofing are available for all emergency call outs. No job 
              is too large or small.
            </p>
          </div>
        </div>
        <EmptySpace small />
     
   </div>
  )
}

export default Welcome

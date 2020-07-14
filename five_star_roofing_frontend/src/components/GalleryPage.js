import React from 'react'
import Banner from './Banner'
import ContactBanner from './ContactBanner'
import BackgroundImage from '../assets/images/new-bg.jpeg'
import CTABanner from './CTABanner'
import EmptySpace from './EmptySpace'
import Gallery from 'react-grid-gallery'
import GetQuote from './GetQuote'


import gutter1 from '../assets/images/gallery/gutter1.png'
import gutter2 from '../assets/images/gallery/gutter2.png'
import gutter3a from '../assets/images/gallery/gutter3.jpg'
import gutter3b from '../assets/images/gallery/gutter3.png'
import gutter4 from '../assets/images/gallery/gutter4.png'
import worker1 from '../assets/images/gallery/worker1.jpg'
import worker2 from '../assets/images/gallery/worker2.jpg'
import worker3 from '../assets/images/gallery/worker3.jpg'
import worker4 from '../assets/images/gallery/worker4.jpg'
import worker5 from '../assets/images/gallery/worker5.jpg'
import worker6 from '../assets/images/gallery/worker6.jpg'
import worker7 from '../assets/images/gallery/worker7.jpg'
import worker8 from '../assets/images/gallery/worker8.jpg'

const IMAGES =
  [
    {
      src: gutter1,
      thumbnail: gutter1,
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: gutter2,
      thumbnail: gutter2,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: gutter3a,
      thumbnail: gutter3a,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: gutter3b,
      thumbnail: gutter3b,
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: worker1,
      thumbnail: worker1,
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: worker2,
      thumbnail: worker2,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: worker3,
      thumbnail: worker3,
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: worker4,
      thumbnail: worker4,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: worker5,
      thumbnail: worker5,
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: worker6,
      thumbnail: worker6,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: worker7,
      thumbnail: worker7,
      thumbnailWidth: 320,
      thumbnailHeight: 174
    },
    {
      src: worker8,
      thumbnail: worker8,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }
  ]

const galleryPage = () => {
  return(
    <div className="pz-gallery__wrapper">
      <div className="pz-services__page-banner-wrapper">
        <Banner 
          bannerTitle="Gallery"
          bannerSubtitle="Five Star Roofing Reliable and Reputed Roofing Contractor in Ireland"
          bannerImage={BackgroundImage} />
        <CTABanner />
      </div>
      <EmptySpace />
      <div className="pz-container">
	<Gallery 
	  enableImageSelection={false}
	  images={IMAGES}/>
      </div>
      <EmptySpace />
      <GetQuote />
    </div>
  )
}

export default galleryPage

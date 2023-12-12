//Banner.js
import React from 'react'
import './Banner.scss'
import bannerImage from '../assets/img/banner.png'

const Banner = () => {
  return (
    <div className='banner' style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className='banner__content'>
        <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner

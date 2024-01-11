// Banner.js
import React from 'react'
import './Banner.scss'

const Banner = ({ backgroundImg, title }) => {
  const bannerStyle = {
    backgroundImage: backgroundImg ? `url(${backgroundImg})` : undefined,
  }

  return (
    <div className='banner' style={bannerStyle}>
      {title && (
        <div className='banner__content'>
          <h1 className='banner__title'>{title}</h1>
        </div>
      )}
    </div>
  )
}

export default Banner

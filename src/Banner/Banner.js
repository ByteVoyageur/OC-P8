// Banner.js
import React from 'react'
import './Banner.scss'

const Banner = ({ backgroundImg, title, className, children }) => {
  const bannerStyle = backgroundImg
    ? { backgroundImage: `url(${backgroundImg})` }
    : {}

  return (
    <div className={`banner ${className}`} style={bannerStyle}>
      <div className='banner__content'>
        {title && <h1 className='banner__title'>{title}</h1>}
        {children}
      </div>
    </div>
  )
}

export default Banner

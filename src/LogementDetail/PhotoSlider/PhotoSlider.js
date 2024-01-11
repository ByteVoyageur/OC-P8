//PhotoSlider.js
import React, { useState } from 'react'
import leftArrow from '../../assets/img/arrow_left.svg'
import rightArrow from '../../assets/img/arrow_right.svg'
import './PhotoSlider.scss'

const PhotoGallery = ({ pictures }) => {
  const [current, setCurrent] = useState(0)
  const total = pictures.length

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1)
  }

  if (!Array.isArray(pictures) || total <= 0) {
    return null
  }

  return (
    <div className='gallery'>
      <img
        src={leftArrow}
        onClick={prevSlide}
        alt='Précédente'
        className='gallery__arrow gallery__arrow--left'
      />
      <div className='gallery__counter'>{`${current + 1} / ${total}`}</div>
      <img
        src={rightArrow}
        onClick={nextSlide}
        alt='Suivante'
        className='gallery__arrow gallery__arrow--right'
      />
      <img src={pictures[current]} alt='logement' className='gallery__image' />
    </div>
  )
}

export default PhotoGallery

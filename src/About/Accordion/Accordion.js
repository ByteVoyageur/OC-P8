//Accordion.js
import React, { useState } from 'react'
import ArrowDownSvg from '../../assets/img/down-arrow.svg'
import './Accordion.scss'

function Accordion({ title, children, initialOpen = false, className }) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  return (
    <div className={`${className} ${isOpen ? 'open' : ''}`}>
      <button
        className='about-toggle-button'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={ArrowDownSvg}
          className={`arrow-down-icon ${isOpen ? 'open' : ''}`}
          alt='toggle'
        />
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        {isOpen && children}
      </div>
    </div>
  )
}

export default Accordion

// Description.js
import React from 'react'
import './Description.scss'

const Description = ({ description, isOpen }) => {
  return (
    <section className={`description ${isOpen ? 'open' : ''}`}>
      <p>{description}</p>
    </section>
  )
}

export default Description

import React from 'react'
import './LogementCarte.scss'

function LogementCarte({ logement }) {
  return (
    <div className='logement-carte'>
      <img
        src={logement.cover}
        alt={logement.title}
        className='logement-image'
      />
      <div className='logement-info'>
        <h3 className='logement-title'>{logement.title}</h3>
        <p className='logement-description'>{logement.description}</p>
      </div>
    </div>
  )
}

export default LogementCarte

//LogementCarte.js
import React from 'react'
import { Link } from 'react-router-dom'
import './LogementCarte.scss'

function LogementCarte({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className='logement-carte'>
      <div>
        <img
          src={logement.cover}
          alt={logement.title}
          className='logement-image'
        />
        <div className='logement-info'>
          <h3 className='logement-title'>{logement.title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default LogementCarte

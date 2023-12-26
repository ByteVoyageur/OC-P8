//LogementListe.js
import React, { useState } from 'react'
import LogementCarte from '../LogementCarte/LogementCarte'
import logementsData from '../assets/data/logements.json'
import './LogementListe.scss'

function LogementListe() {
  const [logements] = useState(logementsData)

  return (
    <div className='logement-liste'>
      {logements.map((logement) => (
        <LogementCarte key={logement.id} logement={logement} />
      ))}
    </div>
  )
}

export default LogementListe

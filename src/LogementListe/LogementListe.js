//LogementListe.js
import React, { useState, useEffect } from 'react'
import LogementCarte from '../LogementCarte/LogementCarte'
import './LogementListe.scss'

function LogementListe() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error('Error fetching data: ', error))
  }, [])

  return (
    <div className='logement-liste'>
      {logements.map((logement) => (
        <LogementCarte key={logement.id} logement={logement} />
      ))}
    </div>
  )
}

export default LogementListe

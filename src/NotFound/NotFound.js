//NotFound.js
import React from 'react'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div>
      <div className='not-found-content'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a href='/'>Retourner sur la page d'accueil</a>
      </div>
    </div>
  )
}

export default NotFound

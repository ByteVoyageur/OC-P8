//Header.js
import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/img/logo_kasa.svg'

const Header = () => {
  return (
    <header className='header'>
      <Logo alt='Kasa Logo' className='header__logo' />
      <nav className='header__nav'>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/about'>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

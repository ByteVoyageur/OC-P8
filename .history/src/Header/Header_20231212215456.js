import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from '../assets/img/logo_kasa.svg' // Import SVG as React component

const Header = () => {
  return (
    <header className='header'>
      <Logo alt='Kasa Logo' className='header__logo' />
      <nav className='header__nav'>
        <ul>
          <li>
            <a href='/'>Accueil</a>
          </li>
          <li>
            <a href='/about'>A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

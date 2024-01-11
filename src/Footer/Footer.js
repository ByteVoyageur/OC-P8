// Footer.js
import React from 'react'
import './Footer.scss'
import { ReactComponent as Logo } from '../assets/img/logo_kasa_white.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <Logo alt='Kasa Logo' className='footer__logo' />{' '}
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer

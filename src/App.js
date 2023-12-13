import React from 'react'
import './App.css'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import LogementListe from './LogementListe/LogementListe'

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <LogementListe />
      <Footer />
    </div>
  )
}

export default App

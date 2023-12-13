// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LogementListe from './LogementListe/LogementListe'
import LogementDetail from './LogementDetail/LogementDetail'
import Banner from './Banner/Banner'

function HomePage() {
  return (
    <>
      <Banner />
      <LogementListe />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/logement/:id' element={<LogementDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

// HomePage.js
import React from 'react'
import Banner from '../Banner/Banner'
import LogementListe from '../LogementListe/LogementListe'
import homepageBanner from '../assets/img/banner.png'

const HomePage = () => {
  return (
    <>
      <Banner
        title='Chez vous, partout et ailleurs'
        backgroundImg={homepageBanner}
      />
      <LogementListe />
    </>
  )
}

export default HomePage

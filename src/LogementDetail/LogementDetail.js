//LogementDetail.js
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PhotoGallery from '../PhotoSlider/PhotoSlider'
import logementsData from '../assets/data/logements.json'

const LogementDetail = () => {
  const [logement, setLogement] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const foundLogement = logementsData.find((item) => item.id === id)
    setLogement(foundLogement)
  }, [id])

  if (!logement) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <PhotoGallery pictures={logement.pictures} />{' '}
    </div>
  )
}

export default LogementDetail

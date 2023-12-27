//LogementDetail.js
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PhotoGallery from './PhotoSlider/PhotoSlider'
import logementsData from '../assets/data/logements.json'
import LogementInfo from './LogementInfo/LogementInfo'
import HostProfile from './HostProfile/HostProfile'
import Description from './Description/Description'
import Equipments from './Equipments/Equipments'
import Rating from './Rating/Rating'
import ArrowDownSvg from '../../src/assets/img/down-arrow.svg'
import './LogementDetail.scss'

const LogementDetail = () => {
  const [logement, setLogement] = useState(null)
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const foundLogement = logementsData.find((item) => item.id === id)
    if (!foundLogement) {
      navigate('/not-found')
    } else {
      setLogement(foundLogement)
    }
  }, [id, navigate])

  if (!logement) {
    return <div>Loading...</div>
  }

  const toggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen)
  const toggleEquipments = () => setIsEquipmentsOpen(!isEquipmentsOpen)

  return (
    <div className='logement-detail-content'>
      <PhotoGallery pictures={logement.pictures} />
      <div className='logement-info-profile-rating'>
        <LogementInfo
          title={logement.title}
          subtitle={logement.location}
          tags={logement.tags}
        />
        <div className='profile-rating'>
          <HostProfile
            name={logement.host.name}
            picture={logement.host.picture}
          />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className='description-equipments-section'>
        <div className='description-section'>
          <button
            onClick={toggleDescription}
            className={`toggle-button ${isDescriptionOpen ? 'open' : ''}`}
          >
            Description
            <img
              src={ArrowDownSvg}
              className={`arrow-down-icon ${
                isDescriptionOpen ? 'rotated' : ''
              }`}
              alt='arrow'
            />
          </button>
          {isDescriptionOpen && (
            <Description
              description={logement.description}
              isOpen={isDescriptionOpen}
            />
          )}
        </div>
        <div className='equipments-section'>
          <button
            onClick={toggleEquipments}
            className={`toggle-button equipments-toggle ${
              isEquipmentsOpen ? 'open' : ''
            }`}
          >
            Équipements
            <img
              src={ArrowDownSvg}
              className={`arrow-down-icon ${
                isDescriptionOpen ? 'rotated' : ''
              }`}
              alt='arrow'
            />
          </button>
          {isEquipmentsOpen && (
            <Equipments
              equipments={logement.equipments}
              isOpen={isEquipmentsOpen}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default LogementDetail

//About.js
import React from 'react'
import './About.scss'
import Banner from '../Banner/Banner'
import Accordion from './Accordion/Accordion'
import aboutBannerImage from '../assets/img/kalen.png'

const About = () => {
  const sections = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      content:
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ]

  return (
    <div className='about'>
      <Banner backgroundImg={aboutBannerImage} />
      <div className='accordion-container'>
        {sections.map((section, index) => (
          <Accordion
            key={index}
            title={section.title}
            initialOpen={false}
            className='about-accordion-button'
          >
            <p>{section.content}</p>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default About

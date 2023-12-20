// Equipments.js
import React from 'react';
import './Equipments.scss';

const Equipments = ({ equipments, isOpen }) => {
  return (
    <section className={`equipments ${isOpen ? 'open' : ''}`}>
      <h3></h3>
      <ul>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </section>
  );
};

export default Equipments;


// HostProfile.js
import React from 'react';
import './HostProfile.scss'; 

const HostProfile = ({ name, picture }) => {
  const [firstName, lastName] = name.split(' ');

  return (
    <div className="host-profile">
      <div className="host-name-container">
        <h3 className="host-first-name">{firstName}</h3>
        <h3 className="host-last-name">{lastName}</h3>
      </div>
      <div className="host-picture-container">
        <img src={picture} alt={`Host ${name}`} className="host-picture" />
      </div>
    </div>
  );
};

export default HostProfile;


// LogementInfo.js
import React from 'react';
import './LogementInfo.scss';

const LogementInfo = ({ title, subtitle, tags }) => {
  return (
    <div className="logement-info">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogementInfo;

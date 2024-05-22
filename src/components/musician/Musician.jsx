import React from 'react';
import './musician.css';

const Musician = ({ name, imageSrc, text, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`musician-container ${isEven ? "even" : "odd"}`}>
      <div className="musician-info">
      <h3>{name}</h3>
        <div className="musician-text">{text.split('\n').map((line, index) => <p key={index}>{line}</p>)}</div>
      </div>
      <div className="musician-photo">
        <img src={imageSrc} alt={`${name} genre`} style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default Musician;

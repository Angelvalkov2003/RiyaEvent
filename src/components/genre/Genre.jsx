import React from 'react';
import './genre.css';

const Genre = ({ name, imageSrc }) => {
  return (
    <div className="genre-container">
      <h2>{name}</h2>
      <img src={imageSrc} alt={`${name} genre`} />
    </div>
  );
};

export default Genre;

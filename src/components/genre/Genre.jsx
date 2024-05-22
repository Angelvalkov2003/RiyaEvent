import React from 'react';
import './genre.css';

const Genre = ({ name, imageSrc }) => {
  return (
    <div className="genre-container">
      <a href={`#${name}`}>
        <img src={imageSrc} alt={`${name} genre`} style={{ objectFit: "cover" }} />
      </a>
    </div>
  );
};

export default Genre;

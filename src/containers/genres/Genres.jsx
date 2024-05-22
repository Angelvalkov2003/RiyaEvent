import React from 'react';
import './genres.css';
import { Genre } from "../../components";
import { Rock, Popfolk, DJ, Narodna, Pop, Tanci, Rap } from '../../assets';

const Genres = () => {

  const genres = [
    { name: "Попфолк", imageSrc: Popfolk },
    { name: "Рок", imageSrc: Rock },
    { name: "Диджея", imageSrc: DJ },
    { name: "Народна", imageSrc: Narodna },
    { name: "Поп", imageSrc: Pop },
    { name: "Танци", imageSrc: Tanci },
    { name: "Рап", imageSrc: Rap },
    { name: "Рок", imageSrc: Rock }
  ];

  return (
    <div className="genres_main" id="genres">
      <h2 className="genres_title">Може да изберете от следните жанрове:</h2>
      <div className="genres_box">
        {genres.map((genre, index) => (
          <Genre key={index} name={genre.name} imageSrc={genre.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Genres;

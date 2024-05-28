import React from 'react';
import './genres.css';
import { Genre } from "../../components";
import comedy from '../../assets/comedy.jpeg';
import dancer from '../../assets/dancer.jpeg';
import DJ from '../../assets/DJ.jpeg';
import folk from '../../assets/folk.jpeg';
import groups from '../../assets/groups.jpeg';
import pop from '../../assets/pop.jpeg';
import popfolk from '../../assets/popfolk.jpeg';
import rap from '../../assets/rap.jpeg';




const Genres = () => {

  const genres = [
    { name: "Pop", imageSrc: pop },
    { name: "Rap", imageSrc: rap },
    { name: "Popfolk", imageSrc: popfolk },
    { name: "Folk", imageSrc: folk },
    { name: "Groups", imageSrc: groups },
    { name: "Dancer", imageSrc: dancer },
    { name: "DJ", imageSrc: DJ },
    { name: "Comedy", imageSrc: comedy }
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

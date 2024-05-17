import React from 'react'
import './genres.css'
import { Genre } from "../../components";
import { Rock, Popfolk, DJ, Narodna, Pop, Tanci, Rap } from '../../assets';

const Genres = () => {
  return (
    <div className="genres_main" id="genres">
      <h2 className="genres_title">Може да изберете от следните жанрове:</h2>
      <div className="genres_box">
        <Genre name="Попфолк" imageSrc={Popfolk}/>
        <Genre name="Рок" imageSrc={Rock}/>
        <Genre name="Диджея" imageSrc={DJ}/>
        <Genre name="Рок" imageSrc={Narodna}/>
        <Genre name="Попфолк" imageSrc={Pop}/>
        <Genre name="Рок" imageSrc={Tanci}/>
        <Genre name="Попфолк" imageSrc={Rap}/>
        <Genre name="Рок" imageSrc={Rock}/>
      </div>
    </div>
  )
}

export default Genres

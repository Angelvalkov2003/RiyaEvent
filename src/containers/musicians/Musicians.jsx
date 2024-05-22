import React from 'react';
import './musicians.css';
import { Musician } from "../../components";
import { Rock, Popfolk, DJ, Narodna, Pop, Tanci, Rap } from '../../assets';

const Musicians = () => {
  // Define an array of genres and their corresponding musicians
  const genres = [
    {
      name: "Чалга изпълнители",
    xox: "Попфолк",
    musicians: [
      { 
        name: "Попфолк", 
        imageSrc: Popfolk, 
        text: "asdasdasdasda sdfgdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj usfdjhgggjgjgjgjgjgjgjgjgjgjgjgjgjgjgjgjg gsadddddddddddddddddddddddddddddddddddddddddddddddddddd adsasdasdasdasdasdasdasd guhgfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfd sfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfds \n____\n музика:\n Беден в душата \n Чалга пеперудки \n Момче без сърце"
      },
      { name: "Рок", imageSrc: Rock, text: "Рок текст" },
      { name: "Диджея", imageSrc: DJ, text: "Диджея текст" }
    ]
    },
    {
      name: "Рап изпълнители",
      xox: "Попфолк",
      musicians: [
        { name: "Народна", imageSrc: Narodna, text: "Народна текст" },
        { name: "Поп", imageSrc: Pop, text: "Поп текст" },
        { name: "Танци", imageSrc: Tanci, text: "Танци текст" }
      ]
    },
    {
      name: "Комедия изпълнители",
      xox: "Попфолк",
      musicians: [
        { name: "Рап", imageSrc: Rap, text: "Рап текст" },
        { name: "Рок", imageSrc: Rock, text: "Рок текст" }
      ]
    }
  ];

  return (
    <div className="musicans_main" id="musicans">
      <h2 className="musicans_title">Това са нашите:</h2>
      <div className="musicans_box">
        {genres.map((genre, genreIndex) => (
          <div className="genre_container" key={genreIndex}>
            <h3 className="genre_text" id={genre.xox}>{genre.name}</h3>
            {genre.musicians.map((musician, musicianIndex) => (
              <Musician
                key={musicianIndex}
                index={musicianIndex} // Pass the index of musician within its genre
                name={musician.name}
                imageSrc={musician.imageSrc}
                text={musician.text} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Musicians;

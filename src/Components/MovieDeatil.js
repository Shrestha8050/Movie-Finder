import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDeatil = () => {
  let { id } = useParams();
  const [movieData, setmovieData] = useState([]);
  const [apiKey] = useState(process.env.REACT_APP_API);
  const [company, setCompany] = useState([]);
  const [genres, setGenres] = useState([]);
  const request = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((res) => {
        setmovieData(res.data);
        setCompany(res.data.production_companies);
        setGenres(res.data.genres);
      });
  };
  useEffect(() => {
    request();
  }, []);

  console.log(movieData);
  return (
    <div className='container deatilContainer'>
      <div className='row'>
        <div className='col s4'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt='Movie Poster'
            width='100%'
          />
        </div>
        <div className='col s8'>
          <h1>{movieData.title ? movieData.title : movieData.name}</h1>

          <strong>Overview : </strong>
          <p style={{ display: 'inline' }}>{movieData.overview}</p>

          <div className='genres'>
            <strong>Genres : </strong>
            {genres.map((genres, i) => (
              <span key={i}>
                <strong>{genres.name}</strong>,{' '}
              </span>
            ))}
          </div>

          <div className='released_date'>
            <strong>Date : </strong>
            {movieData.release_date}
          </div>

          <div className='popularity'>
            <strong>Popularity : </strong>
            {movieData.popularity}
          </div>
          <div className='status'>
            <strong>Status : </strong>
            {movieData.status}
          </div>

          <div className='language'>
            <strong>Language : </strong>
            {movieData.original_language}
          </div>

          <div className='company'>
            <strong>Production Company : </strong>

            {company.map((comp) => (
              <li key={comp.id} style={{ padding: '0 40px' }}>
                {comp.name}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDeatil;

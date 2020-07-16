import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ title, poster, id, date, type }) => {
  return (
    <div className='col s12 m4 l3'>
      {date ? (
        <Link to={`/movie/${id}`}>
          <div className='card'>
            <div className='card-image waves-effect waves-block'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                alt='Movie Poster'
                width='100%'
              />
            </div>
            <div className='detail'>
              <p>{title}</p>
              {title.length < 55 ? <cite>{date}</cite> : null}
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default Movie;

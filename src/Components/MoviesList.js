import React from 'react';
import Movie from './Movie';
const MoviesList = ({ movies }) => {
  return (
    <div className='container'>
      {movies.length === 0 ? (
        'Not Found'
      ) : (
        <div className='row'>
          <div className='col s12'>
            {movies.map((movie, i) => {
              return movie.first_air_date ? null : (
                <Movie
                  key={i}
                  poster={movie.poster_path}
                  title={movie.original_title ? movie.title : movie.name}
                  id={movie.id}
                  date={movie.release_date}
                  type={movie.media_type}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesList;

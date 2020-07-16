import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Nav from './Components/Nav';
import SearchArea from './Components/SearchArea';
import Axios from 'axios';
import MoviesList from './Components/MoviesList';
import { Switch, Route } from 'react-router-dom';
import MovieDeatil from './Components/MovieDeatil';
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [apiKey] = useState(process.env.REACT_APP_API);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    ).then((res) => {
      setMovies(res.data.results);
    });
  };

  const request = () => {
    Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    ).then((res) => {
      setMovies(res.data.results);
    });
  };

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setQuery(e.target.value);
    } else {
      request();
    }
  };
  useEffect(() => {
    request();
  }, []);

  return (
    <Switch>
      <>
        <div className='App'>
          <Nav />
          <Route path='/' exact>
            <Fragment>
              <SearchArea
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
              <MoviesList movies={movies} />
            </Fragment>
          </Route>

          <Route path='/movie/:id'>
            <MovieDeatil />
          </Route>
        </div>
      </>
    </Switch>
  );
}

export default App;

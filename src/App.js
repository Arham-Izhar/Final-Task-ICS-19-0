import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.jsx';
import MovieList from './components/MovieList.jsx';
import Favorites from './components/Favorites.jsx';
import FilterSortBar from './components/FilterSortBar';
import './App.css'
const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '6c981d3d';

function App() {
  const [movies, setMovies] = useState([]);
  const [, setSearch] = useState('');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [sort, setSort] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const searchMovies = async (title) => {
    try {
      const res = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${title}`);
      const movieData = res.data.Search || [];
      const details = await Promise.all(
        movieData.map(m => axios.get(`${API_URL}?apikey=${API_KEY}&i=${m.imdbID}`))
      );
      setMovies(details.map(d => d.data));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const filtered = movies
    .filter(m => yearFilter === '' || m.Year === yearFilter)
    .sort((a, b) => {
      if (sort === 'title') return a.Title.localeCompare(b.Title);
      if (sort === 'year') return b.Year - a.Year;
      return 0;
    });

  const addToFavorites = (movie) => {
    if (!favorites.find(f => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(movie => movie.imdbID !== id));
  };

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <SearchBar onSearch={setSearch} onSubmit={searchMovies} />
      <FilterSortBar setYear={setYearFilter} setSort={setSort} />
      <MovieList movies={filtered} onFavorite={addToFavorites} />
      <Favorites favorites={favorites} onRemove={removeFromFavorites} />
    </div>
  );
}

export default App;

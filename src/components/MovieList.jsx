import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onFavorite }) => (
  <div className="grid">
    {movies.map(movie => (
      <MovieCard key={movie.imdbID} movie={movie} onFavorite={onFavorite} />
    ))}
  </div>
);

export default MovieList;

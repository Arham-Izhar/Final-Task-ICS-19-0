import React from 'react';
import MovieCard from './MovieCard';

const Favorites = ({ favorites, onRemove }) => (
  <div className="favorites">
    <h2>Favorites</h2>
    {favorites.length === 0 && <p>No favorites yet.</p>}
    <div className="grid">
      {favorites.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} onRemove={onRemove} showFavorite={false} />
      ))}
    </div>
  </div>
);

export default Favorites;

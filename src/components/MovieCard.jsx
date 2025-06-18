import React from 'react';

const MovieCard = ({ movie, onFavorite, onRemove, showFavorite = true }) => {
  const { Poster, Title, Year, imdbID } = movie;

  return (
    <div className="movie-card">
      <img
        src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x445?text=No+Image'}
        alt={Title}
      />
      <h3>{Title}</h3>
      <p>{Year}</p>

      {showFavorite ? (
        <button onClick={() => onFavorite(movie)}>Add to Favorites ❤️</button>
      ) : (
        <button onClick={() => onRemove(imdbID)}>Remove ❌</button>
      )}
    </div>
  );
};

export default MovieCard;

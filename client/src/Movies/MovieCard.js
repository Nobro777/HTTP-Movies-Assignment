import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card-container">
      <div className="movie-card" style={{margin: "1% 11.5% 0 11.5%"}}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          console.log("stars :", star),
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;

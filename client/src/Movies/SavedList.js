import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SavedList({ list }) {
  
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => {
        console.log("my list :", list)
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default SavedList;

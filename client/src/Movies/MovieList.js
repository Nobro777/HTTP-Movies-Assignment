import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/api/movies")
    .then( res => this.setState({ movies: res.data }))
    .catch( error => {console.log("error :", error)})
  }

  render(){
    return (
      <div className="movie-list-container">
        <h1 style={{display:"flex", justifyContent:"center"}}>Movie List</h1>
        <div className="movie-list">
          {this.state.movies.map(movie => (
              <MovieInfo key={movie.id} movie={movie}/>
            ))}
        </div>
      </div>
    )}
}

function MovieInfo ({movie}) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie}/>
    </Link>
  )}

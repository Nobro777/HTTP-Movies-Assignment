import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: ""
    }
  }

  componentDidMount(){
    {console.log("movie mounted successfully")}
    this.fetchMovie(this.props.match.params.id)
  }
  
  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => 
        this.setState({ movie: res.data }))
      .catch(error => console.log("error", error));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList
    addToSavedList(this.state.movie);
  };

  handleDelete = () => {
    axios
    .delete(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
    .then(response => { 
      console.log("item deleted :", response)
      this.props.history.push("/") })
    .catch( err => console.log(err));
  }
  
  render(){
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    } else {
    return (
      <div className='save-wrapper'>
        <MovieCard movie={this.state.movie} />
        <div onClick={this.saveMovie} style={{display: "flex", flexDirection:"column",}}>
            Save
          <Link 
          to={`/update-movie/${this.props.match.params.id}`}>
            Update
          </Link>
          <button onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    )}
}}

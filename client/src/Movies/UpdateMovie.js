import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateMovie(props) {

    console.log("my update props :", props)
    
    const [movie, setMovie] = useState({
        title: '',
        director: '',
        metaScore: 0,
        stars: []
    })
    
    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then( res => {
            setMovie(res.data)
        })
        .catch( error => {console.log("error :", error)})
    },[props.match.params.id])

    const handleChange = e => {
        console.log(e.target.value)
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })}

    const updateStars = e => {
        setMovie({
            ...movie,
            stars: [e.target.value]
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
        .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then( res => {
            console.log("put response :", res)
            props.history.push('/')
        })
        .catch(error => {console.log("error :", error)})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{border:"2px solid black", margin:"2% 30% 2% 30%", display: "flex", flexDirection: "column", alignItems: "center",}}>
                <h2> Update a Movie </h2>
                <label htmlFor="title" style={{margin:"1% 0 .5% 0"}}>New Name:</label>
                <input 
                type="text"
                name="title"
                placeholder="Update Title..."
                onChange={handleChange}
                value={movie.title}
                />
                <label htmlFor="director" style={{margin:"1% 0 .5% 0"}}>New Director:</label>
                <input 
                type="text"
                name="director"
                placeholder="Update Director..."
                onChange={handleChange}
                value={movie.director}
                />
                <label htmlFor="metascore" style={{margin:"1% 0 .5% 0"}}>New Metascore:</label>
                <input 
                type="text"
                name="metascore"
                placeholder="Update Metascore..."
                onChange={handleChange}
                value={movie.metascore}
                />
                <label htmlFor="stars" style={{margin:"1% 0 .5% 0"}}>New Stars:</label>
                <input
                type="text"
                name="stars"
                placeholder="Update Stars..."
                value={movie.stars}
                onChange={updateStars}
                />
                <button style={{margin:"1% 0 1% 0"}}>Update</button>
            </form>
        </div>
    )

}
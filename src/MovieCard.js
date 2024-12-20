import React from "react";
const MovieCard=({movie}) =>{
    // const{title,description,urlImg,rating}=props.movie;
    return(
        <div className="movie-card">
            <h1>{movie.title}</h1>
            <img src={movie.urlImg} alt={movie.title}/>
            <p>description:{movie.description}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    )
}
export default MovieCard;
// import React from 'react'

// function MovieCard(props) {
//     //destruction of the props
//     const{title,description,urlImg,rating}=props.movie;
//   return (
//     <div>
//         <h1>{title}</h1>
//         <p>{description}</p>
//         <img src={urlImg} alt={title}/>
//         <p>{rating}/10</p>

//     </div>
//   )
// }

// export default MovieCard
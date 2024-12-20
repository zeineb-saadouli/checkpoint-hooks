// import {useState} from "react";
// const AddMovie=({onAddMovie})=>{ // l'ajout du film 
//     const [movie, setMovie]=useState({ // l'initialisation de l'objet movie 
//         title:'',
//         description:'',
//         urlImg:'',
//         rating:''
//     })
//     const handleChange=(event)=>{ // event ajouté lil input
//         setMovie({...movie,[event.target.name]:event.target.value})
//     };
//     const handleSubmit=(event)=>{ // event ajouté lil form
//         event.prevent.Default();
//         if (movie.title && movie.description && movie.posterURL && movie.rating){
//             onAddMovie(movie);
//             setMovie({title:'', description:'', urlImg:'', rating:''})
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//           <input type="text"  name='title' value={movie.title} onChange={handleChange} placeholder='Enter a title'/>
//           <input type="text"  name='description' value={movie.description} onChange={handleChange} placeholder='add a description'/>
//           <input type="text"  name='urlImg' value={movie.urlImg} onChange={handleChange} placeholder='add an image'/>
//           <input type="text"  name='rating' value={movie.rating} onChange={handleChange} placeholder='add a rating'/>
//           <button type="submit" >Add a movie</button>
//         </form>
//       )
// };
// export default AddMovie;
import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && urlImg && rating) {
      onAddMovie({ title, urlImg, description, rating });
      setTitle("");
      setUrlImg("");
      setDescription("");
      setRating("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={urlImg}
        onChange={(e) => setUrlImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;

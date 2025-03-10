import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Filtre from './Filtre'

function App() {
  const [movies, setMovies]= useState([
    {id:1,
      title:"The Dark Knight",
      urlImg:"https://th.bing.com/th/id/OIP.ZKqkLuPBjCIpJntRCSDuJgHaJ4?rs=1&pid=ImgDetMain",
      description:"Batman faces the Joker in Gotham City",
      rating:"9"
    },
    {id:2,
      title:"The Conjuring",
      urlImg:"https://th.bing.com/th/id/OIP.3o-QVdMC2ij76AqDmcF2cgHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7",
      description:"Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      rating:"10"
    },
    {id:3,
      title:"Titanic",
      urlImg:"https://th.bing.com/th/id/R.0d8172e79defa8965f5f63ce80623721?rik=uaNFnAtXdBzq2w&pid=ImgRaw&r=0",
      description:"Une aristocrate de dix-sept ans tombe amoureuse d'un artiste pauvre au grand coeur à bord du luxueux Titanic.",
      rating:"8"
    },
    {id:4,
      title:"The conjuring2",
      urlImg:"https://th.bing.com/th/id/OIP.uCkIMEoKoIU4hB0KBnlxIQAAAA?w=121&h=182&c=7&r=0&o=5&pid=1.7",
      description:"Ed et Lorraine Warren se rendent dans le nord de Londres pour aider une mère célibataire, qui élève seule ses quatre enfants, à se débarrasser de l'esprit surnaturel qui tourmente sa maison.",
      rating:"7"
    }
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = ({ title, rating }) => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          (rating ? movie.rating >= parseFloat(rating) : true)
      )
    );
  };
   const addMovie=(movie)=>{
    const newMovie = { ...movie, id: movies.length + 1 }; // Ajouter un ID unique
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  }
  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filtre onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies}/>
  <AddMovie onAddMovie={addMovie}/>
    </div>
  );
}

export default App;

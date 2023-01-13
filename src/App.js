import './App.css';
import {useDispatch,useSelector} from "react-redux"
import { getAllMovies, getAllShows } from './config/movies/movieSlice';
import MovieCard from './movieCard';
import { Fragment, useEffect } from 'react';
import {fetchAsyncMovies,fetchAsyncShows} from "./config/movies/movieSlice"

function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  },[dispatch])
  const movies=useSelector(getAllMovies)
  const shows=useSelector(getAllShows)

  let renderMovies,renderShows=""

console.log(movies);
  renderMovies=movies?.Response ==="True" ? 
  (movies.Search.map((movie,index) => <MovieCard key={index} data={movie}/>)):(<div><h1>{movies.Error}</h1></div>)
  renderShows=shows?.Response ==="True" ? 
  (shows.Search.map((movie,index) => <MovieCard key={index} data={movie}/>)):(<div><h1>Not Found</h1></div>)




  

  return (
    <Fragment>
      <div>
            <h1>Movies</h1>
            <div>{renderMovies}</div>
        </div>
        <div>
            <h1>Shows</h1>
    <div>{renderShows}</div>
        </div>
    </ Fragment>
    
  );
}

export default App;

import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Trailer from './components/trailer/Trailer';
import Header from "./components/header/Header";
import ReviewForm from "./components/reviewForm/ReviewForm";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [movieData, setMovieData] = useState();
  const [reviews=[], setReviews] = useState();

  const getTopRatedMovies = async () => {
    try {
      const response = await api.get("/v1/tmdb/movies/top_rated");
      setTopRatedMovies(response.data.results);
    } catch(err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/v1/tmdb/movies/${movieId}`);
      const singleMovie = response.data;
      setMovieData(singleMovie);

      //setReviews(singleMovie.reviews);

      const reviews = ['review1', 'review2', 'review3'];

      setReviews(reviews);

    } catch (e) {

    }
  };

  useEffect(() => {
    getTopRatedMovies()
  }, []);

  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={topRatedMovies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movieData} reviews={reviews} setReviews={setReviews}/>}></Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;

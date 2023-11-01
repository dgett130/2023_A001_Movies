import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Trailer from './components/trailer/Trailer';
import Header from "./components/header/Header";

function App() {
  const [topRatedMovies, setTopRatedMovies] = useState();

  const getTopRatedMovies = async () => {
    try {
      const response = await api.get("/v1/tmdb/movies/top_rated");
      console.log(response);
      setTopRatedMovies(response.data.results);
    } catch(err) {
      console.log(err);
    }
  }

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
          </Route>
        </Routes>
      </div>
  );
}

export default App;

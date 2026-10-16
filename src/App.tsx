
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import LandingPage from './components/common/LandingPage';
import NavBar from './components/common/NavBar';
import Genres from './components/common/Genres';
import MoviePage from './components/models/movies/MoviePage';
import VideoGamePage from './components/models/videoGames/VideoGamePage';
import TvShowPage from './components/models/tvShows/TvShowPage';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div>
        <Routes location={''}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/videoGames" element={<VideoGamePage />} />
          <Route path="/tvShows" element={<TvShowPage />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import LandingPage from './components/common/LandingPage';
import NavBar from './components/common/NavBar';
import VideoGamePage from './components/models/videoGames/VideoGamePage';
import TvShowPage from './components/models/tvShows/TvShowPage';
import MoviePage from './components/models/movies/MoviePage';
import Years from './components/models/Years';
import Genres from './components/models/Genres';
import EditVideoGame from './components/models/videoGames/EditVideoGame';
import FilterResults from './components/common/FilterResults';
import EditMovie from './components/models/movies/EditMovie';
import NewMovie from './components/models/movies/NewMovie';
import EditTvShow from './components/models/tvShows/EditTvShow';
import NewTvShow from './components/models/tvShows/NewTvShow';
import NewVideoGame from './components/models/videoGames/NewVideoGame';

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
          <Route path="/years" element={<Years />} />
          <Route path="/addMovie" element={<NewMovie />} />
          <Route path="/movies/:id/edit" element={<EditMovie />} />
          <Route path="/addVideoGame" element={<NewVideoGame />} />
          <Route path="/videoGames/:id/edit" element={<EditVideoGame />} />
          <Route path="/addTvShow" element={<NewTvShow />} />
          <Route path="/tvShows/:id/edit" element={<EditTvShow />} />
          <Route path="/filterResults" element={<FilterResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

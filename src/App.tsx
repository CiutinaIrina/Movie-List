
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import LandingPage from './components/common/LandingPage';
import NavBar from './components/common/NavBar';
import MediaPage from './components/common/MediaPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div>
        <Routes location={''}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<MediaPage mediaType="movie" />} />
          <Route path="/videoGames" element={<MediaPage mediaType="video game" />} />
          <Route path="/tvShows" element={<MediaPage mediaType="TV Show" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

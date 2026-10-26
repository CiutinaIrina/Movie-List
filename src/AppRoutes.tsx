import { Route, Routes } from 'react-router';
import LandingPage from "./components/common/LandingPage"
import FilterResults from "./components/common/SearchBar"
import Genres from "./components/models/Genres"
import EditMovie from "./components/models/movies/EditMovie"
import ShowMovie from "./components/models/movies/ShowMovie"
import EditTvShow from "./components/models/tvShows/EditTvShow"
import ShowTvShow from "./components/models/tvShows/ShowTvShow"
import EditVideoGame from "./components/models/videoGames/EditVideoGame"
import ShowVideoGame from "./components/models/videoGames/ShowVideoGame"
import Years from "./components/models/Years"
import MyMoviePage from './components/models/movies/MyMoviePage';
import MyTvShowPage from './components/models/tvShows/MyTvShowPage';
import MyVideoGamePage from './components/models/videoGames/MyVideoGamePage';
import RouteDoesNotExist from './components/utility/RouteDoesNotExist';
import CreateMedia from './components/common/CreateMedia';

export default function AppRoutes() {
    return (
        <Routes location={''}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies" element={<MyMoviePage />} />
            <Route path="/videoGames" element={<MyVideoGamePage />} />
            <Route path="/tvShows" element={<MyTvShowPage />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/years" element={<Years />} />
            <Route path="/:type/add" element={<CreateMedia />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/movies/show/:id" element={<ShowMovie />} />
            <Route path="/videoGames/edit/:id" element={<EditVideoGame />} />
            <Route path="/videoGames/show/:id" element={<ShowVideoGame />} />
            <Route path="/tvShows/edit/:id" element={<EditTvShow />} />
            <Route path="/tvShows/show/:id" element={<ShowTvShow />} />
            <Route path="/filterResults" element={<FilterResults />} />
            <Route path="*" element={<RouteDoesNotExist />} />
        </Routes>
    )
}
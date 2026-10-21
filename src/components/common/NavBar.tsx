import { NavLink } from "react-router";
import "../../scss/NavBar.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <>
            <nav className="navbar bg-info bg-gradient navbar-expand-lg py-4 lh">
                <div className="px-5 container-fluid">
                    <NavLink className="navbar-brand fs-3 fw-semibold" to="/">Movie List</NavLink>
                    <div className="collapse navbar-collapse px-3">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link fs-5" to="/movies">Movies</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fs-5" to="/videoGames">Video Games</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fs-5" to="/tvShows">TV Shows</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fs-5" to="/genres">Genres</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fs-5" to="/years">Years</NavLink></li>
                        </ul>
                    </div>
                    <SearchBar />
                </div>
            </nav>
        </>
    )
}
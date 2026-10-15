import GenericList from "../utility/GenericList";
import type Movie from "../../models/movie";
import DisplayMovie from "./DisplayMovie";
import "../../scss/components/MovieList.css";

export default function MovieList(props: MovieListProps) {
    return (
        <GenericList list={props.movies}>
            <div className="movie-list">
                {props.movies?.map(movie => 
                    <DisplayMovie movie={movie} key={movie.id}/>
                )}
            </div>
        </GenericList>
    )
}

interface MovieListProps {
    movies: Movie[] | undefined;
}
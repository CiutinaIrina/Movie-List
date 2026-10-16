import "../../../scss/components/MovieList.css";
import GenericList from "../../utility/GenericList";
import type Movie from "./movie";
import DisplayMovie from "./MovieDisplayer";

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
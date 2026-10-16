import type Movie from "./movie.ts";
import "../../../scss/components/MovieDisplayer.css";

export default function DisplayMovie(props: DisplayMovieProps) {
    return (
        <div className="movie p-3">
            <a className="movie-img" href={props.movie.src}>
                <img src={props.movie.src} />
            </a>
            <section className="movie-information">
                <p className="movie-title pt-1 fs-5 lh-2 pb-0 mb-0"> {props.movie.name} </p>
                <p>{props.movie.genre.join(", ")}{props.movie.seen ? <span> • {props.movie.rating} / 10</span>: undefined}</p>
            </section>
        </div>
    )
}

interface DisplayMovieProps {
    movie: Movie;
}
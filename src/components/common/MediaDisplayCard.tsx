import "../../scss/MediaDisplayCard.css";
import type Media from "../../models/media";


export default function MediaDisplayCard(props: MediaDisplayCardProps) {
    return (
        <div className="movie p-3">
            <a className="movie-img" href={props.media.src}>
                <img src={props.media.src} />
            </a>
            <section className="movie-information">
                <p className="movie-title pt-1 fs-5 lh-2 pb-0 mb-0"> {props.media.name} </p>
                <p>{props.media.genre.join(", ")}{props.media.seen ? <span> • {props.media.rating} / 10</span>: undefined}</p>
            </section>
        </div>
    )
}

interface MediaDisplayCardProps {
    media: Media;
}
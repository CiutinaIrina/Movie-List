import "../../scss/MediaDisplayCard.css";
import type Media from "../../models/media";
import { SquarePen, Info } from 'lucide-react';
import { NavLink } from "react-router";
import { getModelRoute } from "../../common/functions";

export default function MediaDisplayCard(props: MediaDisplayCardProps) {
    return (
        <div className="movie">
            <a className="movie-img" href={props.media.src}>
                <img src={props.media.src} />
            </a>
            <section className="movie-information">
                <p className="movie-title pt-1 fs-5 lh-2 pb-0 mb-0"> {props.media.name} </p>
                <p>{props.media.genre.join(", ")} • {props.media.year}</p>
                <p>Edit: <NavLink to={getModelRoute(props.media.type, `/edit/${props.media.id}`)}> <SquarePen /> </NavLink></p>
                <p>Details: <NavLink to={getModelRoute(props.media.type, `/show/${props.media.id}`)}> <Info /> </NavLink></p>
            </section>
        </div>
    )
}

interface MediaDisplayCardProps {
    media: Media;
}
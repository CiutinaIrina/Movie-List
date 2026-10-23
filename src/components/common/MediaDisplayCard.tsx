import "../../scss/MediaDisplayCard.css";
import type Media from "../../models/media";
import { SquarePen, Info } from 'lucide-react';
import { NavLink } from "react-router";
import { getModelRoute } from "../../common/functions";

export default function MediaDisplayCard(props: MediaDisplayCardProps) {
    return (
        <a className="media" href={props.media.src}>
            <img className="media-img" src={props.media.src} />
            <div className="media-desc">
                TET
            </div>
        </a>
    )
}

interface MediaDisplayCardProps {
    media: Media;
}
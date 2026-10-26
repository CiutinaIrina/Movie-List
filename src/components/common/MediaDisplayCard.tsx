import "../../scss/MediaDisplayCard.css";
import type Media from "../../models/media";
import { SquarePen, Trash  } from 'lucide-react';
import CustomIcon from "./CustomIcon";
import { NavLink } from "react-router-dom";
import { getModelRoute } from "../../common/functions";

export default function MediaDisplayCard(props: MediaDisplayCardProps) {
    return (
        <div className="media">
            <img className="media-img" src={props.media.src} />
            <div className="media-desc">
                <div className="media-icons">
                    <NavLink to={getModelRoute(props.media.type, `/edit/${props.media.id}`)}><CustomIcon name={SquarePen} status="primary" size={30}/></NavLink>
                    <CustomIcon name={Trash} status="danger" size={30}/>
                </div>
                <h2 className="media-title">{props.media.name}</h2>
                <div className="media-info">
                    <span>Genres</span>
                    <span>{props.media.rating}</span>
                </div>
            </div>
        </div>
    )
}

interface MediaDisplayCardProps {
    media: Media;
}
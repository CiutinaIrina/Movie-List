import "../../scss/MediaList.css";
import type Media from "../../models/media";
import GenericList from "../utility/GenericList";
import MediaDisplayCard from "./MediaDisplayCard";

export default function MediaList(props: MediaListProps) {
    return (
        <GenericList list={props.mediaEntries}>
            <div className="media-list p-4">
                {props.mediaEntries?.map(media => 
                    <MediaDisplayCard media={media} key={media.id}/>
                )}
            </div>
        </GenericList>
    )
}

interface MediaListProps {
    mediaEntries: Media[] | undefined;
}
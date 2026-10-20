import { useEffect, useState } from "react";
import type Media from "../../models/media";
import movies from "../../data/movies.ts"
import videoGames from "../../data/videoGames.ts"
import tvShows from "../../data/tvShows.ts"
import MediaList from "./MediaList.js"

export default function MediaPage(props: MediaPageProps) {

    const [media, setMedia] = useState<Media[] | undefined>();

    const [watchedMedia, setWatchedMedia] = useState<Media[] | undefined>();
    const [unwatchedMedia, setUnwatchedMedia] = useState<Media[] | undefined>();

    const internalType = (str: string): string =>
        str.charAt(0).toUpperCase() + str.slice(1) + "s";

    const getMediaObject = (mediaType: string): Media[] | undefined => {
        if (mediaType === "movie") {
            return movies;
        } else if (mediaType === "video game") {
            return videoGames;
        } else {
            return tvShows;
        }
    }

    useEffect(() => {
        setMedia(getMediaObject(props.mediaType))

        return () => {
            setMedia(undefined);    
            setWatchedMedia(undefined);
            setUnwatchedMedia(undefined);
        }
    }, [props.mediaType])
    
    setTimeout(() => {
        setWatchedMedia(media?.filter(media => media.seen));
        setUnwatchedMedia(media?.filter(media => !media.seen));
    }, 500)

    return (
        <>
            <h1>Watched {internalType(props.mediaType)}</h1>
            <MediaList mediaEntries={watchedMedia} />
            <h1>Unwatched {internalType(props.mediaType)}</h1>
            <MediaList mediaEntries={unwatchedMedia} />
        </>
    )
}

interface MediaPageProps {
    mediaType: string,
}

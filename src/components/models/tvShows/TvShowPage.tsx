import { useEffect, useState } from "react";
import tvShows from "../../../data/tvShows.ts"
import type Media from "../../../models/media.ts";
import MediaList from "../../common/MediaList.tsx"
import MediaHeading from "../../common/MediaHeading.tsx";

export default function TvShowPage() {

    const [media, setMedia] = useState<Media[] | undefined>();

    const [wathced, setWatched] = useState<Media[] | undefined>();
    const [unwatched, setUnwatched] = useState<Media[] | undefined>();

    useEffect(() => {
        setMedia(tvShows)
    })
    
    setTimeout(() => {
        setWatched(media?.filter(media => media.seen));
        setUnwatched(media?.filter(media => !media.seen));
    }, 500)

    return (
        <>
            <MediaHeading title="Finished TV Shows" name="tvShow" route="/addTvShow"/>
            <MediaList mediaEntries={wathced} editRoute="tvShows"/>
            <MediaHeading title="Unfinished TV Shows" name="tvShow" route="/addTvShow"/>
            <MediaList mediaEntries={unwatched} editRoute="tvShows"/>
        </>
    )
}

import { useEffect, useState } from "react";
import movies from "../../../data/movies.ts"
import type Media from "../../../models/media.ts";
import MediaList from "../../common/MediaList.tsx"
import MediaHeading from "../../common/MediaHeading.tsx";

export default function MoviePage() {
    const [media, setMedia] = useState<Media[] | undefined>();

    const [watched, setWatched] = useState<Media[] | undefined>();
    const [unwatched, setUnwatched] = useState<Media[] | undefined>();

    useEffect(() => {
        setMedia(movies)
    })
    
    setTimeout(() => {
        setWatched(media?.filter(media => media.seen));
        setUnwatched(media?.filter(media => !media.seen));
    }, 500)


    return (
        <>
            <MediaHeading title="Wathced Movies" name="movie" route="/addMovie"/>
            <MediaList mediaEntries={watched} editRoute="movies"/>
            <MediaHeading title="Unwathced Movies" name="movie" route="/addMovie"/>
            <MediaList mediaEntries={unwatched} editRoute="movies" />
        </>
    )
}

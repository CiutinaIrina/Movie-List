import { useEffect, useState } from "react";
import movies from "../../../data/movies.ts"
import type Media from "../../../models/media.ts";
import MediaList from "../../common/MediaList.tsx"
import MediaHeading from "../../common/MediaHeading.tsx";

export default function MoviePage() {
    const [media, setMedia] = useState<Media[] | undefined>();

    const [watched, setWatched] = useState<Media[] | undefined>();
    const [unwatched, setUnwatched] = useState<Media[] | undefined>();

    const getMediaType = (): string => {
        return movies[0].type;
    }

    useEffect(() => {
        setMedia(movies)
    })
    
    setTimeout(() => {
        setWatched(media?.filter(media => media.seen));
        setUnwatched(media?.filter(media => !media.seen));
    }, 500)


    return (
        <section>
            <MediaHeading title="Wathced Movies" name={getMediaType()}/>
            <MediaList mediaEntries={watched}/>
            <MediaHeading title="Unwathced Movies" name={getMediaType()}/>
            <MediaList mediaEntries={unwatched}/>
        </section>
    )
}

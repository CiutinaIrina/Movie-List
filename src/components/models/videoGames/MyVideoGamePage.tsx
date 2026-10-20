import { useEffect, useState } from "react";
import videoGames from "../../../data/videoGames.ts"
import type Media from "../../../models/media.ts";
import MediaList from "../../common/MediaList.tsx"
import MediaHeading from "../../common/MediaHeading.tsx";

export default function VideoGamePage() {

    const [media, setMedia] = useState<Media[] | undefined>();

    const [wathced, setWatched] = useState<Media[] | undefined>();
    const [unwatched, setUnwatched] = useState<Media[] | undefined>();

    const getMediaType = (): string => {
        return videoGames[0].type;
    }

    useEffect(() => {
        setMedia(videoGames)
    })
    
    setTimeout(() => {
        setWatched(media?.filter(media => media.seen));
        setUnwatched(media?.filter(media => !media.seen));
    }, 500)


    return (
        <>
            <MediaHeading title="Played Video Games" name={getMediaType()} />
            <MediaList mediaEntries={wathced}/>
            <MediaHeading title="Unplayed Video Games" name={getMediaType()} />
            <MediaList mediaEntries={unwatched}/>
        </>
    )
}

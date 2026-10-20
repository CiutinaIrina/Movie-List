import { useEffect, useState } from "react";
import videoGames from "../../../data/videoGames.ts"
import type Media from "../../../models/media.ts";
import MediaList from "../../common/MediaList.tsx"
import MediaHeading from "../../common/MediaHeading.tsx";

export default function VideoGamePage() {

    const [media, setMedia] = useState<Media[] | undefined>();

    const [wathced, setWatched] = useState<Media[] | undefined>();
    const [unwatched, setUnwatched] = useState<Media[] | undefined>();

    useEffect(() => {
        setMedia(videoGames)
    })
    
    setTimeout(() => {
        setWatched(media?.filter(media => media.seen));
        setUnwatched(media?.filter(media => !media.seen));
    }, 500)


    return (
        <>
            <MediaHeading title="Played Video Games" name="videoGame" route="/addVideoGame"/>
            <MediaList mediaEntries={wathced} editRoute="videoGames"/>
            <MediaHeading title="Unplayed Video Games" name="videoGame" route="/addVideoGame"/>
            <MediaList mediaEntries={unwatched} editRoute="videoGames"/>
        </>
    )
}

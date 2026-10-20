import { useParams } from "react-router-dom"

export default function EditVideoGame() {
    const { id } = useParams();

    return (
        <>
            Edit Video Game {id}
        </>
    )
}
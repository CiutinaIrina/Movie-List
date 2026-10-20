import { useParams } from "react-router-dom";

export default function EditMovie() {
    const { id } = useParams();

    return (
        <>
            Edit Movie {id}
        </>
    )
}
import { useParams } from "react-router-dom";

export default function EditMovie() {

    const { name, id } = useParams();

    return (
        <>
            Edit Movie {id}
        </>
    )
}
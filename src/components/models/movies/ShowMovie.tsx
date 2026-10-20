import { useParams } from "react-router-dom";

export default function ShowMovie() {
    const { id } = useParams();

    return (
        <>
            Show Movie { id } 
        </>
    )
}

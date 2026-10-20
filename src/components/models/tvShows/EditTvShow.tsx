import { useParams } from "react-router-dom";

export default function EditTvShow() {
    const { id } = useParams();

    return (
        <>
            Edit Tv Show { id } 
        </>
    )
}
import { useParams } from "react-router-dom";

export default function EditTvShow() {

    const { name, id } = useParams();

    return (
        <>
            Edit Tv Show { id } 
        </>
    )
}
import { useParams } from "react-router-dom";

export default function ShowTvShow() {
    const { id } = useParams();

    return (
        <>
            Show Tv Show { id } 
        </>
    )
}
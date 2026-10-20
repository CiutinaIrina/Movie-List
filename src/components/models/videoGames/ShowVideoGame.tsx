import { useParams } from "react-router-dom";

export default function ShowVideoGame() {
    const { id } = useParams();

    return (
        <>
            Show Video Game { id } 
        </>
    )
}

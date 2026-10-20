import { useNavigate } from "react-router"
import Button from "../../common/Button";

export default function NewMovie() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/movies")
    }

    return (
        <>
            New Movie
            <Button text="Create Movie" onClick={handleClick}/>
        </>
    )
}
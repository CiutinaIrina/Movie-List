import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";

export default function NewTvShow() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/tvShows")
    }

    return (
        <>
            New Tv Show
            <Button text="Create TV Show" onClick={handleClick}/>
        </>
    )
}
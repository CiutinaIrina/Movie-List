import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";

export default function NewVideoGame() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/videoGames")
    }
    
    return (
        <>
            New Video Game
            <Button text="Create Video Game" onClick={handleClick}/>
        </>
    )
}
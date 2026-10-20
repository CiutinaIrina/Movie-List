
import { useNavigate } from "react-router-dom";

export default function FilterResults() {
    const navigate = useNavigate();
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            navigate("/filterResults")
        }
    };

    return (
        <>
            <input type="search" placeholder="Search" aria-label="Search" onKeyDown={handleKeyDown}/>
            <button className="btn btn-primary">
                <i className="fas fa-search"></i>
            </button>
        </>
    )
}
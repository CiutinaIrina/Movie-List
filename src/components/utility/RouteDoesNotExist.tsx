import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingPage from "../common/LandingPage";

export default function RouteDoesNotExist() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
    })

    return (
        <LandingPage />
    )
}
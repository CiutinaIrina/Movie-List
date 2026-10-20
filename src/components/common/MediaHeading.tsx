import { NavLink } from "react-router";
import Button from "./Button";

export default function MediaHeading(props: MediaHeadingProps) {
    const capitalise = (): string => {
        return props.name.charAt(0).toUpperCase() + props.name.slice(1);
    }

    return (
        <div className="px-5 pt-4 pb-2 d-flex justify-content-between">
            <h1 className="mb-0">{props.title}</h1>
            <NavLink to={props.route} ><Button text={"Add " + capitalise()} /></NavLink>
        </div>
    )
}

interface MediaHeadingProps {
    title: string
    name: string
    route: string
}

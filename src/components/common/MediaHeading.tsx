import { NavLink } from "react-router";
import Button from "./Button";
import { capitalise, getModelRoute } from "../../common/functions";

export default function MediaHeading(props: MediaHeadingProps) {
    return (
        <div className="px-5 pt-4 pb-2 d-flex justify-content-between">
            <h1 className="mb-0">{props.title}</h1>
            <NavLink to={getModelRoute(props.name, "add")} ><Button text={"Add " + capitalise(props.name)} /></NavLink>
        </div>
    )
}

interface MediaHeadingProps {
    title: string
    name: string
}

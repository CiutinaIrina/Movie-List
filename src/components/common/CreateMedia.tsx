import { type SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { capitalise } from "../../common/functions"
import "../../scss/Form.css";
import MediaForm from "./MediaForm";
import type MediaFields from "../../models/mediaForm";


export default function CreateMedia() {

    const { pathname } = useLocation();

    const category = decodeURIComponent(pathname).split("/")[1];

    const onSubmit: SubmitHandler<MediaFields> = async (data) => {
       await new Promise((resolve) => setTimeout(resolve, 3000))

        console.log(data)
    }
    
    return (
        <>
            <h1>Add a new {capitalise(category)}</h1>
            <MediaForm type={category} onSubmit={onSubmit}/>
        </>
    )
}

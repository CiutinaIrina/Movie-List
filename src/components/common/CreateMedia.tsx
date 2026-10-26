import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../common/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink, useLocation } from "react-router-dom";
import { firstLetterCapitalized } from "../../common/validators";
import * as yup from "yup";

export default function CreateMedia() {
    const { handleSubmit, register, watch, formState: {errors, isValid}} = useForm<MediaForm>({
        resolver: yupResolver(validateForm),
        mode: "onChange"
    })

    const { pathname } = useLocation();

    const category = decodeURIComponent(pathname).split("/")[1];

    const seen = watch("seen");

    const onSubmit: SubmitHandler<MediaForm> = (data) => {
        validateForm
            .validate(data)
            .then(() => console.log(data))
            .catch((error: yup.ValidationError) => console.log(error));
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" {...register("name")}/>
                </div>
                <p className="text-danger">{errors.name?.message ?? undefined}</p>

                <div className="form-group">
                    <label>Year</label>
                    <input className="form-control" type="number" {...register("year")}/>
                </div>
                <p className="text-danger">{errors.year?.message ?? undefined}</p>

                <div className="form-group">
                    <label>Commentary</label>
                    <input className="form-control" type="description" {...register("seen")}/>
                </div>

                <div className="form-group">
                    <label>Seen</label>
                    <input className="form-check-input" type="checkbox" {...register("commentary")}/>
                </div>

                { category === "movie" && (<div className="form-group">
                    <label>Nominated for Best Picture</label>
                    <input className="form-check-input" type="checkbox" {...register("nominated")}/>
                </div>)}

                { category === "movie" && (<div className="form-group">
                    <label>Won Best Picture</label>
                    <input className="form-check-input" type="checkbox" {...register("won")}/>
                </div>)}

                { category === "tv show" && (<div className="form-group">
                    <label>Number of seasons</label>
                    <input className="form-control" type="number" {...register("seasons")}/>
                </div>)}

                { seen && (<div className="form-group">
                    <label>Rating</label>
                    <input className="form-control" type="number" {...register("rating")}/>
                </div>)}

                <Button type="submit" text="Create Movie" disabled={!isValid}/>
                <NavLink to="/movies"><Button status="danger" text="Cancel"/></NavLink>
            </form>

        </>
    )
}

interface MediaForm {
    name: string,
    seen: boolean,
    year: number,
    // genre: string[],
    commentary?: string,
    rating? :number,
    nominated?: boolean,
    won?: boolean,
    seasons?: number,
    // platforms?: string[],
}

const validateForm = yup.object().shape({
    name: yup.string().required("Enter a valid name").test(firstLetterCapitalized()),
    seen: yup.boolean().required(),
    year: yup.number().integer("Enter a valid year.").min(1800, "Enter a valid year.").max(new Date().getFullYear(), "Enter a valid year.").required("Enter a valid year."),
    // genre: yup.array().optional(),
    commentary: yup.string().optional(),
    rating : yup.number().optional(),
    nominated: yup.boolean().optional(),
    won: yup.boolean().optional(),
    seasons: yup.number().optional(),
    // platforms: yup.array().optional(),
})

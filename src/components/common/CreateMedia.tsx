import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../common/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink, useLocation } from "react-router-dom";
import { firstLetterCapitalized } from "../../common/validators";
import { camelCase, capitalise } from "../../common/functions"
import * as yup from "yup";
import "../../scss/Form.css";

export default function CreateMedia() {
    const { handleSubmit, register, watch, formState: {errors, isValid, isSubmitting}} = useForm<MediaForm>({
        resolver: yupResolver(validateForm),
        mode: "onChange"
    })

    const { pathname } = useLocation();

    const category = decodeURIComponent(pathname).split("/")[1];

    const seen = watch("seen");

    const mediaListPage = "/" + camelCase(category) + "s";

    const onSubmit: SubmitHandler<MediaForm> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000))

        validateForm
            .validate(data)
            .then(() => console.log(data))
            .catch((errors) => console.log(errors));
    }
    
    return (
        <>
            <h1>Add a new {capitalise(category)}</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <label className="field-label" htmlFor="name">Name</label>
                    <input id="name" className="field-text" type="text" {...register("name")}/>
                    <p className="form-danger text-danger">{errors.name?.message ?? undefined}</p>
                </div>

                <div className="form-field">
                    <label className="field-label" htmlFor="year">Year</label>
                    <input id="year" className="field-number" type="number" {...register("year")}/>
                    <p className="form-danger text-danger">{errors.year?.message ?? undefined}</p>
                </div>

                <div className="form-field">
                    <label className="field-label" htmlFor="commentary">Commentary</label>
                    <input id="commentary" className="field-desc" type="description" {...register("commentary")}/>
                    <p className="form-danger text-danger"></p>
                </div>

                <div className="form-field-checkbox">
                    <label className="field-label" htmlFor="seen">Seen</label>
                    <input id="seen" className="field-checkbox" type="checkbox" {...register("seen")}/>
                    <p className="form-danger text-danger"></p>
                </div>

                { category === "movie" && (<div className="form-field-checkbox">
                    <label className="field-label" htmlFor="nominated">Nominated for Best Picture</label>
                    <input id="nominated" className="field-checkbox" type="checkbox" {...register("nominated")}/>
                    <p className="form-danger text-danger"></p>
                </div>)}

                { category === "movie" && (<div className="form-field-checkbox">
                    <label className="field-label" htmlFor="won">Won Best Picture</label>
                    <input id="won" className="field-checkbox" type="checkbox" {...register("won")}/>
                    <p className="form-danger text-danger"></p>
                </div>)}

                { category === "tv show" && (<div className="form-field">
                    <label className="field-label" htmlFor="seasons">Number of seasons</label>
                    <input id="seasons" className="field-number" type="number" {...register("seasons")}/>
                    <p className="form-danger text-danger"></p>
                </div>)}

                <div className={`form-field ${seen ? "" : "form-hidden"}`}>
                    <label className="field-label" htmlFor="rating">Rating</label>
                    <input id="rating" className="field-number" type="number" {...register("rating")}/>
                    <p className="form-danger text-danger"></p>
                </div>

                <Button type="submit" text={isSubmitting ? "Sending..." : "Send"} disabled={!isValid || isSubmitting}/>
                <NavLink to={mediaListPage}><Button status="danger" text="Cancel"/></NavLink>
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

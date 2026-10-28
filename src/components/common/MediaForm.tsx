import { NavLink } from "react-router";
import Button from "./Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import "../../scss/Form.css";
import { camelCase } from "../../common/functions";
import type MediaForm from "../../models/mediaForm";
import { firstLetterCapitalized } from "../../common/validators";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type MediaFields from "../../models/mediaForm";

export default function Form(props: FormProps) {
    const { handleSubmit, register, watch, formState: {errors, isValid, isSubmitting} } = useForm<MediaForm>({
        resolver: yupResolver(validateForm),
        mode: "onChange"
    });
    
    const seen = watch("seen");
    
    const mediaListPage = "/" + camelCase(props.type) + "s";

    return (
        <>
            <form className="form" onSubmit={handleSubmit(props.onSubmit, (errors) => console.log("Validation errors:", errors))}>
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

                { props.type === "movie" && (<div className="form-field-checkbox">
                    <label className="field-label" htmlFor="nominated">Nominated for Best Picture</label>
                    <input id="nominated" className="field-checkbox" type="checkbox" {...register("nominated")}/>
                    <p className="form-danger text-danger"></p>
                </div>)}

                { props.type === "movie" && (<div className="form-field-checkbox">
                    <label className="field-label" htmlFor="won">Won Best Picture</label>
                    <input id="won" className="field-checkbox" type="checkbox" {...register("won")}/>
                    <p className="form-danger text-danger"></p>
                </div>)}

                { props.type === "tv show" && (<div className="form-field">
                    <label className="field-label" htmlFor="seasons">Number of seasons</label>
                    <input id="seasons" className="field-number" type="number" {...register("seasons")}/>
                    <p className="form-danger text-danger"></p>
                </div>)}

                <div className={`form-field ${seen ? "" : "form-hidden"}`}>
                    <label className="field-label" htmlFor="rating">Rating</label>
                    <input id="rating" className="field-number" type="number" {...register("rating")}/>
                    <p className="form-danger text-danger"></p>
                </div>

                <div className="form-field">
                    <label className="field-label" htmlFor="genre">Genre</label>
                    <select id="genre" multiple {...register("genre")}>
                        <option value="">Select a genre</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Drama">Drama</option>
                    </select>
                    <p className="form-danger text-danger"></p>
                </div>

                { props.type === "video game" && (<div className="form-field">
                    <label className="field-label" htmlFor="platforms">Platforms</label>
                    <select id="platforms" multiple {...register("platforms")}>
                        <option value="ps5">PS5</option>
                        <option value="xbox">Xbox</option>
                        <option value="PC">PC</option>
                    </select>
                    <p className="form-danger text-danger"></p>
                </div>)}

                <Button type="submit" text={isSubmitting ? "Sending..." : "Send"} disabled={!isValid || isSubmitting}/>
                <NavLink to={mediaListPage}><Button status="danger" text="Cancel" /></NavLink>
            </form>
        </>
    )
}

interface FormProps {
    onSubmit: SubmitHandler<MediaFields>;
    type: string;
};

// disabled={!isValid || isSubmitting}

const validateForm = yup.object().shape({
    name: yup.string().required("Enter a valid name").test(firstLetterCapitalized()),
    seen: yup.boolean().optional(),
    year: yup.number().integer("Enter a valid year.").min(1800, "Enter a valid year.").max(new Date().getFullYear(), "Enter a valid year.").required("Enter a valid year."),
    genre: yup.array().of(yup.string().defined()).nullable().optional(),
    platforms: yup.array().of(yup.string().defined()).nullable().optional(),
    commentary: yup.string().optional(),
    rating : yup.number().nullable().optional()
    .transform((value, originalValue) =>
        originalValue === "" ? null : value
    ),
    nominated: yup.boolean().optional(),
    won: yup.boolean().optional(),
    seasons: yup.number().optional(),
})

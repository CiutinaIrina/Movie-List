import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../common/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from "react-router-dom";
import { firstLetterCapitalized } from "../../../common/validators";
import * as yup from "yup";

export default function NewMovie() {
    const { handleSubmit, register, watch, formState: {errors, isValid} } = useForm<FormType>({
        resolver: yupResolver(validationSchema),
        mode: "onChange"
    });

    const seen = watch("seen");

    const onSubmit: SubmitHandler<FormType> = (data) => {
        validationSchema
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
                    <label>Seen</label>
                    <input className="form-check-input" type="checkbox" {...register("seen")}/>
                </div>

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

interface FormType {
    name: string;
    year: number;
    seen: boolean;
    rating?: number;
}

const validationSchema = yup.object().shape({
    name: yup.string().required("Enter a valid name").test(firstLetterCapitalized()),
    year: yup.number().integer("Enter a valid year.").min(1800, "Enter a valid year.").max(new Date().getFullYear(), "Enter a valid year.").required("Enter a valid year."),
    seen: yup.boolean().defined(),
    rating: yup.number().optional(),
})

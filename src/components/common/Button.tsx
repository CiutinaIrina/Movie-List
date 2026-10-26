export default function Button(props: ButtonProps) {
    const classes = `btn btn-${props.status ?? `primary`} btn-${props.size ?? ""} ${props.disabled ? "disabled" : undefined}`

    return (
        <button className={classes} onClick={props.onClick} type={props.type ?? "button"}>
            {props.text ?? ""}
        </button>
    )
}

interface ButtonProps {
    text?: string;
    status?: string;
    size?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: () => void;
}

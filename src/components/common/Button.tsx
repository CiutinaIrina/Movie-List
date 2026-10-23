export default function Button(props: ButtonProps) {
    const classes = `btn btn-${props.status ?? `primary`} btn-${props.size ?? ""}`

    return (
        <button className={classes} onClick={props.onClick}>
            {props.text ?? ""}
        </button>
    )
}

interface ButtonProps {
    text?: string;
    status? :string;
    size? :string;
    onClick?: () => void;
}
export default function Button(props: ButtonProps) {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>{props.text}</button>
    )
}

interface ButtonProps {
    text: string;
    onClick?: () => void;
}
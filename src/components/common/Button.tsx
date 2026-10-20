export default function Button(props: ButtonProps) {
    return (
        <button className="btn btn-primary">{props.text}</button>
    )
}

interface ButtonProps {
    text: string
}
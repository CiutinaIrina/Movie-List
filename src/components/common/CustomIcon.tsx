import type { LucideIcon } from "lucide-react";
import "../../scss/CustomIcon.css";

export default function CustomIcon(props: CustomIconProps) {

    const Icon = props.name;
    const iSize = props.size ?? 28;
    const classes = `custom-icon rounded-circle m-1 p-0 custom-icon-${props.status ?? "primary"}`

    const styles = {
        width: `${iSize}px`,
        height: `${iSize}px`,
    }

    return (
        <button className={classes} style={styles}>
            <Icon size={iSize - 14}/>
        </button>
    )
}

interface CustomIconProps {
    name: LucideIcon;
    size?: number | undefined;
    status?: string | undefined;
}

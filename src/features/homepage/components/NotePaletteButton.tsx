import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface NotePaletteButtonProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
}

export const NotePaletteButton: FC<NotePaletteButtonProps> = ({
    className,
    ...props
}) => {
    return (
        <button
            id="note-palette-button"
            className={twClassMerge(className, "")}
            {...props}
        >
            Note palette
        </button>
    );
};

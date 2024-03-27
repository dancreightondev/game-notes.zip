import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface AddNewNoteButtonProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
}

export const AddNewNoteButton: FC<AddNewNoteButtonProps> = ({
    className,
    ...props
}) => {
    return (
        <button
            id="add-new-note-button"
            className={twClassMerge(className, "")}
            {...props}
        >
            New note button
        </button>
    );
};

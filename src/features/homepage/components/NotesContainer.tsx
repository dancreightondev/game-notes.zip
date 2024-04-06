import { NoteBlock } from "./NoteBlock";
import { NoteBlockType } from "../utils/enums";
import { FC } from "react";

interface NotesContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    // Custom props go here
}

export const NotesContainer: FC<NotesContainerProps> = ({
    className,
    ...props
}) => {
    return (
        <div id="notes-editor" className="col-span-6 mx-3 mt-36" {...props}>
            <NoteBlock type={NoteBlockType.Text} />
        </div>
    );
};

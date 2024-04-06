import { FC } from "react";
import { NoteBlockType } from "../utils/enums";
import { MDXEditor, headingsPlugin } from "@mdxeditor/editor";

interface NoteBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    // Custom props go here
    type: NoteBlockType;
}

export const NoteBlock: FC<NoteBlockProps> = ({
    className,
    type,
    ...props
}) => {
    switch (type) {
        case NoteBlockType.Text: // Plain text block
            return (
                <div id="text-block" className="col-span-6 mx-3" {...props}>
                    <MDXEditor
                        markdown=""
                        contentEditableClassName="prose prose-p:text-foreground"
                        plugins={[headingsPlugin()]}
                    />
                </div>
            );

        default: // Display error message if NoteBlockType is unknown
            return (
                <span>
                    Appearance not defined for NoteBlockType.
                    {NoteBlockType[type]}
                </span>
            );
    }
};

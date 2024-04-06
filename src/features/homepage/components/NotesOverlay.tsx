import { Sidebar } from "./Sidebar";
import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";
import { UserProfileButton } from "@components/UserProfileButton";
import { NotePaletteButton } from "./NotePaletteButton";

interface NotesOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    // Custom props go here
    showSidebar?: boolean;
}

export const NotesOverlay: FC<NotesOverlayProps> = ({
    className,
    showSidebar,
    ...props
}) => {
    return (
        <div
            id="notes-overlay"
            className={twClassMerge(
                className,
                "w-[80rem] h-screen fixed grid grid-cols-8 pointer-events-none"
            )}
            {...props}
        >
            <Sidebar className="self-center h-[97vh] ml-[2vh] pointer-events-auto" />
            <div className="col-span-6 invisible"></div>
            <div
                id="far-buttons"
                className="grid grid-cols-1 self-center h-[97vh] mr-[2vh] pointer-events-auto"
            >
                <UserProfileButton className="justify-self-end" />
                <NotePaletteButton className="place-self-end" />
            </div>
        </div>
    );
};

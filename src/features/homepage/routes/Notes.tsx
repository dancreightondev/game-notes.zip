import { NotesContainer } from "../components/NotesContainer";
import { NotesOverlay } from "../components/NotesOverlay";

export const Notes = () => {
    return (
        <div id="notes" className="w-full">
            <NotesOverlay />
            <div id="notes-layout" className="grid grid-cols-8">
                <div className="invisible" />
                <NotesContainer />
                <div className="invisible" />
            </div>
        </div>
    );
};

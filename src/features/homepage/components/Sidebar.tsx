import { GamesList } from "./GamesList";
import { useState } from "react";
import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";
import { SidebarAppLogo } from "./SidebarAppLogo";
import { AddNewGameButton } from "./AddNewGameButton";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    // Custom props go here
}

// TODO: Convert to global component and change content contextually?
export const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleIsExpanded = () => setIsExpanded(!isExpanded);

    return (
        <div
            id="sidebar"
            className={twClassMerge(
                className,
                "bg-background text-foreground shadow-2xl shadow-stone-950 rounded-lg transition-width fixed top-4 bottom-4 mx-4 grid grid-cols-1",
                `${isExpanded ? "w-64" : "w-16"}`
            )}
            onMouseEnter={toggleIsExpanded}
            onMouseLeave={toggleIsExpanded}
            {...props}
        >
            <SidebarAppLogo
                expand={isExpanded}
                className="self-start mt-1 mb-5"
            />
            <GamesList expand={isExpanded} className="self-center max-h-full" />
            <AddNewGameButton
                expand={isExpanded}
                className="self-end mb-1 mt-5"
            />
        </div>
    );
};

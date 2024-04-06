import { GamesList } from "./GamesList";
import { useState } from "react";
import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";
import { SidebarAppLogo } from "./SidebarAppLogo";
import { AddGameButton } from "./AddGameButton";

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
                "shadow-lg shadow-zinc-900 bg-background rounded-lg transition-size",
                `${isExpanded ? "w-60" : "w-16"}`
            )}
            onMouseEnter={toggleIsExpanded}
            onMouseLeave={toggleIsExpanded}
            {...props}
        >
            <div id="sidebar-content" className="grid grid-cols-1 h-full">
                <SidebarAppLogo
                    expand={isExpanded}
                    className="self-start mt-1 mb-24"
                />
                <GamesList
                    expand={isExpanded}
                    className="self-center max-h-full"
                />
                <AddGameButton
                    expand={isExpanded}
                    className="self-end mb-1 mt-24"
                />
            </div>
        </div>
    );
};

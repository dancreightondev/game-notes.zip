import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface SidebarAppLogoProps extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
    expand?: boolean;
}

export const SidebarAppLogo: FC<SidebarAppLogoProps> = ({
    className,
    expand,
    ...props
}) => {
    return (
        <button
            id="sidebar-app-logo"
            className={twClassMerge(className, "flex mx-1 h-14 rounded-lg")}
            {...props}
        >
            <img
                src="https://placehold.co/48"
                className="rounded ml-1 my-auto"
            ></img>
            <p
                className={twClassMerge(
                    "text-left font-semibold line-clamp-2 self-center ml-3 transition-opacity", // Always on the element
                    `${
                        expand // Conditional styling
                            ? "opacity-100 delay-100"
                            : "opacity-0 duration-0"
                    }`
                )}
            >
                game-notes.zip
            </p>
        </button>
    );
};

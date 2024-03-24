import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface GamesListItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
    game: string;
    expand?: boolean;
}

export const GamesListItem: FC<GamesListItemProps> = ({
    className,
    game,
    expand,
    ...props
}) => {
    return (
        <button
            id="games-list-item"
            className={twClassMerge(className, "flex mx-1")}
            {...props}
        >
            <img src="https://placehold.co/52" className="rounded ml-0.5"></img>
            <p
                className={twClassMerge(
                    "text-left line-clamp-2 self-center ml-3 transition-opacity", // Always on the element
                    `${
                        expand // Conditional styling
                            ? "opacity-100 delay-100"
                            : "opacity-0 duration-0"
                    }`
                )}
            >
                {game}
            </p>
        </button>
    );
};

import { FC, useState } from "react";
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
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    return (
        <button
            id="games-list-item"
            className={twClassMerge(
                className,
                "flex w-full h-14 my-0.5 rounded-lg transition-colors duration-75",
                `${isHighlighted ? "bg-dark" : ""}`,
                `${isMouseDown ? "bg-opacity-25" : ""}`
            )}
            onMouseEnter={() => setIsHighlighted(true)}
            onMouseLeave={() => {
                setIsHighlighted(false);
                setIsMouseDown(false);
            }}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
            {...props}
        >
            <img
                src="https://placehold.co/48"
                className={twClassMerge("rounded ml-1 my-auto")}
            ></img>
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

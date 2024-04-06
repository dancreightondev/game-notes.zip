import { FC, useState } from "react";
import { twClassMerge } from "@utils/tailwind";
import { PlusIcon } from "@heroicons/react/24/solid";

interface AddGameButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
    expand?: boolean;
}

export const AddGameButton: FC<AddGameButtonProps> = ({
    className,
    expand,
    ...props
}) => {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    return (
        <button
            id="add-game"
            className={twClassMerge(
                className,
                "flex h-14 mx-1 rounded-lg transition-all duration-75",
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
            <div
                className={twClassMerge(
                    "w-12 h-12 ml-1 my-auto rounded bg-dark",
                    `${isHighlighted ? "shadow-inner shadow-background" : ""}`
                )}
            >
                <PlusIcon
                    className={twClassMerge(
                        "w-7 h-7 m-2.5 transition-colors",
                        `${
                            expand // Conditional styling when sidebar is expanded
                                ? "text-foreground"
                                : "text-background"
                        }`,
                        `${
                            isHighlighted // Conditional styling when button is highlighted
                                ? "text-green"
                                : ""
                        }`
                    )}
                />
            </div>
            <p
                className={twClassMerge(
                    "absolute text-left line-clamp-2 self-center ml-16 mr-1 transition-opacity", // Always on the element
                    `${
                        expand // Conditional styling
                            ? "opacity-100 delay-100"
                            : "opacity-0 duration-0"
                    }`
                )}
            >
                Add game
            </p>
        </button>
    );
};

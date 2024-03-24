import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface AddNewGameButtonProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
    expand?: boolean;
}

export const AddNewGameButton: FC<AddNewGameButtonProps> = ({
    className,
    expand,
    ...props
}) => {
    return (
        <button
            id="add-new-game-button"
            className={twClassMerge(
                className,
                "flex h-14 mx-1 rounded-lg transition-colors duration-75 hover:bg-dark"
            )}
            {...props}
        >
            <img
                src="https://placehold.co/48"
                className="rounded ml-1 my-auto"
            ></img>
            <p
                className={twClassMerge(
                    "text-left line-clamp-2 self-center ml-3 mr-1 transition-opacity", // Always on the element
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

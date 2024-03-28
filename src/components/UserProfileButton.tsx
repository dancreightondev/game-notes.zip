import { FC, useState } from "react";
import { twClassMerge } from "@utils/tailwind";
import { UserProfileMenuItem } from "./UserProfileMenuItem";
import { UserProfileMenuFooter } from "./UserProfileMenuFooter";
import {
    UserIcon,
    Cog8ToothIcon,
    ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

interface UserProfileButtonProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
}

export const UserProfileButton: FC<UserProfileButtonProps> = ({
    className,
    ...props
}) => {
    const [isBig, setIsBig] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            id="user-profile-button"
            className={twClassMerge(
                className,
                "flex flex-col justify-self-end shadow-lg shadow-zinc-900 bg-background rounded-lg transition-size",
                `${isBig ? "w-16 h-16" : "w-14 h-14"}`,
                `${isMenuOpen ? "w-60 h-[17.5rem]" : ""}`
            )}
        >
            <button
                className={twClassMerge(
                    "hover:bg-dark transition-all rounded-lg",
                    `${isMenuOpen ? "m-1 flex flex-row" : ""}`
                )}
                onMouseEnter={() => setIsBig(true)}
                onMouseLeave={() => {
                    if (!isMenuOpen) {
                        setIsBig(false);
                    }
                }}
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    setIsBig(true);
                }}
                {...props}
            >
                <div
                    className={twClassMerge(
                        "flex flex-col absolute text-left mx-2 my-2.5",
                        `${
                            isMenuOpen
                                ? "opacity-100 delay-100"
                                : "opacity-0 duration-0"
                        }`
                    )}
                >
                    <span className="text-sm text-light">Logged in as</span>
                    <span className="text-md font-medium">Username</span>
                </div>
                <img
                    src="https://placehold.co/52"
                    id="user-profile-picture"
                    className={twClassMerge(
                        "rounded my-1 mr-1 ml-auto transition-size",
                        `${isBig ? "w-14 h-14" : "w-12 h-12"}`
                    )}
                ></img>
            </button>
            <div
                id="user-profile-menu"
                className={twClassMerge(
                    "transition-all h-full",
                    `${
                        isMenuOpen
                            ? "opacity-100 delay-100"
                            : "opacity-0 duration-0"
                    }`
                )}
            >
                <div className="w-[94%] mx-auto">
                    <hr className="border-light border-opacity-20 mb-0.5" />
                </div>
                <div className={twClassMerge("grid grid-cols-1")}>
                    <UserProfileMenuItem
                        text="Edit profile"
                        icon={<UserIcon />}
                        className="text-left justify-start"
                    />
                    <UserProfileMenuItem
                        text="Settings"
                        icon={<Cog8ToothIcon />}
                        className="text-left justify-start"
                    />
                    <UserProfileMenuItem
                        text="Log out"
                        icon={<ArrowLeftStartOnRectangleIcon />}
                        className="text-left justify-start"
                    />
                </div>
                <div className="w-[94%] mx-auto">
                    <hr className="border-light border-opacity-20 mb-3 mt-0.5" />
                </div>
                <UserProfileMenuFooter className="place-self-center" />
            </div>
        </div>
    );
};

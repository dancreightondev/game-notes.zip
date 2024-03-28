import { FC, ReactNode } from "react";
import { twClassMerge } from "@utils/tailwind";

interface UserProfileMenuItemProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    // Custom props go here
    icon: ReactNode;
    text: string;
}

export const UserProfileMenuItem: FC<UserProfileMenuItemProps> = ({
    className,
    icon,
    text,
    ...props
}) => {
    return (
        <button
            id="user-profile-menu-item"
            className={twClassMerge(
                className,
                "flex flex-row mx-1 my-0.5 hover:bg-dark transition-all rounded-lg p-2"
            )}
            {...props}
        >
            <div className="h-6 w-6 mt-0.5">{icon}</div>
            <p className="ml-2 w-full">{text}</p>
        </button>
    );
};

import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface UserProfileMenuItemProps
	extends React.HTMLAttributes<HTMLButtonElement> {
	// Custom props go here
	text: string;
}

export const UserProfileMenuItem: FC<UserProfileMenuItemProps> = ({
	className,
	text,
	...props
}) => {
	return (
		<button
			id="user-profile-menu-item"
			className={twClassMerge(className, "")}
			{...props}
		>
			{text}
		</button>
	);
};

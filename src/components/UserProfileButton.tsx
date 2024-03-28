import { FC, useState } from "react";
import { twClassMerge } from "@utils/tailwind";

interface UserProfileButtonProps
	extends React.HTMLAttributes<HTMLButtonElement> {
	// Custom props go here
}

export const UserProfileButton: FC<UserProfileButtonProps> = ({
	className,
	...props
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleIsExpanded = () => setIsExpanded(!isExpanded);

	return (
		<button
			id="user-profile-button"
			className={twClassMerge(
				className,
				"shadow-lg shadow-stone-950 bg-background rounded-lg hover:bg-dark transition-size",
				`${isExpanded ? "w-16 h-16" : "w-14 h-14"}`
			)}
			onMouseEnter={toggleIsExpanded}
			onMouseLeave={toggleIsExpanded}
			{...props}
		>
			<img
				src="https://placehold.co/56"
				className={twClassMerge(
					"rounded mx-auto my-auto transition-size",
					`${isExpanded ? "w-14 h-14" : "w-12 h-12"}`
				)}
			></img>
		</button>
	);
};

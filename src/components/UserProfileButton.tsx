import { FC, useState } from "react";
import { twClassMerge } from "@utils/tailwind";
import { UserProfileMenuItem } from "./UserProfileMenuItem";
import { UserProfileMenuFooter } from "./UserProfileMenuFooter";

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
				"flex flex-col justify-self-end shadow-lg shadow-stone-950 bg-background rounded-lg transition-size",
				`${isBig ? "w-16 h-16" : "w-14 h-14"}`,
				`${isMenuOpen ? "w-60 h-max" : ""}`
			)}
		>
			<button
				className={twClassMerge(
					"hover:bg-dark transition-size rounded-lg"
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
					"",
					`${isMenuOpen ? "visible" : "hidden"}`
				)}
			>
				<div className={twClassMerge("grid grid-cols-1")}>
					<UserProfileMenuItem
						text="Edit profile"
						className="text-right"
					/>
					<UserProfileMenuItem
						text="Log out"
						className="text-right"
					/>
				</div>
				<UserProfileMenuFooter />
			</div>
		</div>
	);
};

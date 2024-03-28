import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface UserProfileFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
}

export const UserProfileMenuFooter: FC<UserProfileFooterProps> = ({
	className,
	...props
}) => {
	return (
		<div className={twClassMerge(className, "")} {...props}>
			<hr />
			<div className="flex flex-col text-right text-xs">
				<a href="">About</a>
				<a href="">Privacy</a>
				<a href="">Contact</a>
				<a href="">GitHub</a>
			</div>
		</div>
	);
};

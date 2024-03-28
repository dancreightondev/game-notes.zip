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
        <div
            id="user-profile-menu-footer"
            className={twClassMerge(className, "")}
            {...props}
        >
            <div
                id="footer-links"
                className="grid text-xs text-light mx-3 gap-1"
            >
                <div className="flex flex-nowrap mx-auto">
                    <a href="/about" className="text-center hover:underline">
                        About
                    </a>
                    <span className="mx-3 select-none">•</span>
                    <a href="/privacy" className="text-center hover:underline">
                        Privacy
                    </a>
                    <span className="mx-3 select-none">•</span>
                    <a href="/contact" className="text-center hover:underline">
                        Contact
                    </a>
                </div>
                <div className="flex flex-nowrap mx-auto">
                    <a
                        href="https://github.com/dancreightondev/game-notes.zip"
                        target="_blank"
                        className="text-center hover:underline"
                    >
                        GitHub
                    </a>
                    <span className="mx-3 select-none">•</span>
                    <a
                        href="https://ko-fi.com/dancreighton"
                        target="_blank"
                        className="text-center hover:underline"
                    >
                        Donate
                    </a>
                </div>
            </div>
        </div>
    );
};

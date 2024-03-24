import { GamesListItem } from "./GamesListItem";
import { FC } from "react";
import { twClassMerge } from "@utils/tailwind";

interface GamesListProps extends React.HTMLAttributes<HTMLDivElement> {
    // Custom props go here
    expand?: boolean;
}

export const GamesList: FC<GamesListProps> = ({
    className,
    expand,
    ...props
}) => {
    return (
        <div
            id="games-list"
            className={twClassMerge(className, "grid grid-cols-1 gap-y-2 my-2")}
            {...props}
        >
            {/* List of dummy games */}
            <GamesListItem expand={expand} game="RuneScape" />
            <GamesListItem expand={expand} game="Old School RuneScape" />
            <GamesListItem expand={expand} game="Warframe" />
            <GamesListItem
                expand={expand}
                game="Animal Crossing: New Horizons" // TODO: Replace name with ID and display data through an API call?
            />
        </div>
    );
};

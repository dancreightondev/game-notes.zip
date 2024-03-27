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
            className={twClassMerge(
                className,
                "mx-1 overflow-y-auto scrollbar-hide"
            )}
            {...props}
        >
            {/* List of dummy games. Replace game name with ID and display data through an API call? */}
            <GamesListItem expand={expand} game="RuneScape" />
            <GamesListItem expand={expand} game="Old School RuneScape" />
            <GamesListItem expand={expand} game="Warframe" />
            <GamesListItem
                expand={expand}
                game="Animal Crossing: New Horizons"
            />
            <GamesListItem expand={expand} game="Football Manager 2024" />
            <GamesListItem expand={expand} game="Crusader Kings III" />
            <GamesListItem expand={expand} game="FINAL FANTASY XIV" />
            <GamesListItem
                expand={expand}
                game="STAR WARS™: The Old Republic™"
            />
            <GamesListItem expand={expand} game="Destiny 2" />
            <GamesListItem expand={expand} game="World of Warcraft" />
            <GamesListItem expand={expand} game="Baldur's Gate 3" />
            <GamesListItem expand={expand} game="Hogwarts Legacy" />
            <GamesListItem expand={expand} game="The Witcher 3: Wild Hunt" />
        </div>
    );
};

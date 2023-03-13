import { getTeam } from "./functions/getTeam";
import { getPlayer } from "./functions/getPlayer";
import { getSearchResult } from "./functions/getSearchResult";
declare const _default: {
    getTeam: (teamId: string, full?: boolean) => Promise<import("./interfaces/TeamResult").default>;
    getPlayer: (playerId: string, full?: boolean) => Promise<any>;
    getSearchResult: (keyword: string, options?: import("./functions/getSearchResult").Options | undefined) => Promise<{
        matches: {
            count: number;
            data: import("./interfaces/Raw/ApiSearchResult").MatchesDataset[];
        };
        teams: {
            count: number;
            data: import("./interfaces/Raw/ApiSearchResult").AwayElement[];
        };
        news: {
            count: number;
            data: import("./interfaces/Raw/ApiSearchResult").NewsDataset[];
        };
        squad: {
            count: number;
            data: import("./interfaces/Raw/ApiSearchResult").SquadDataset[];
        };
        leagues: {
            count: number;
            data: import("./interfaces/Raw/ApiSearchResult").LeaguesDataset[];
        };
    }>;
};
export default _default;
export { getTeam, getPlayer, getSearchResult };
//# sourceMappingURL=index.d.ts.map
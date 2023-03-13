export interface Options {
    filter?: "squadMember" | "news" | "team" | "match" | "league";
    language?: string;
}
declare const getSearchResult: (keyword: string, options?: Options) => Promise<{
    matches: {
        count: number;
        data: import("../interfaces/Raw/ApiSearchResult").MatchesDataset[];
    };
    teams: {
        count: number;
        data: import("../interfaces/Raw/ApiSearchResult").AwayElement[];
    };
    news: {
        count: number;
        data: import("../interfaces/Raw/ApiSearchResult").NewsDataset[];
    };
    squad: {
        count: number;
        data: import("../interfaces/Raw/ApiSearchResult").SquadDataset[];
    };
    leagues: {
        count: number;
        data: import("../interfaces/Raw/ApiSearchResult").LeaguesDataset[];
    };
}>;
export default getSearchResult;
export { getSearchResult };
//# sourceMappingURL=getSearchResult.d.ts.map
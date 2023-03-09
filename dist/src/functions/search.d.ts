interface Options {
    filter?: keyof ["squadMember", "news", "team", "match", "league"];
    language?: string;
}
declare const getSearchResult: (search: string, options?: Options) => Promise<{
    matches: {
        count: number | undefined;
        data: import("../interfaces/Raw/ApiSearchResult").MatchesDataset[] | undefined;
    };
    teams: {
        count: number | undefined;
        data: import("../interfaces/Raw/ApiSearchResult").AwayElement[] | undefined;
    };
    news: {
        count: number | undefined;
        data: import("../interfaces/Raw/ApiSearchResult").NewsDataset[] | undefined;
    };
    squad: {
        count: number | undefined;
        data: import("../interfaces/Raw/ApiSearchResult").SquadDataset[] | undefined;
    };
    leagues: {
        count: number | undefined;
        data: import("../interfaces/Raw/ApiSearchResult").LeaguesDataset[] | undefined;
    };
}>;
export default getSearchResult;
export { getSearchResult };
//# sourceMappingURL=search.d.ts.map
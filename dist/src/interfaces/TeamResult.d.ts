interface ApiPlayerInfo {
    id: number;
    name: string;
    country: string;
    role: string;
}
interface ApiTeam {
    id: number;
    name: string;
    shortName: string;
    country: string;
    logo: string;
    coach: string;
    stadium: string;
    squad: ApiPlayerInfo[];
}
export default ApiTeam;
export { ApiTeam };
//# sourceMappingURL=TeamResult.d.ts.map
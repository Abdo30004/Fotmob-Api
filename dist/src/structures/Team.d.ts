import CacheManager from "./CacheManager";
import { Player } from "./Player";
import { ApiTeam } from "../interfaces/TeamResult";
declare class Team extends CacheManager<Player> {
    name: string;
    id: number;
    country: string;
    players: Player[];
    constructor(ApiTeam: ApiTeam);
}
export default Team;
export { Team };
//# sourceMappingURL=Team.d.ts.map
import { ApiPlayer } from "../interfaces/PlayerResult";
import CacheManager from "./CacheManager";
declare class Player extends CacheManager<Player> {
    name: string;
    id: number;
    country: string;
    constructor(ApiPlayer: ApiPlayer);
}
export default Player;
export { Player };
//# sourceMappingURL=Player.d.ts.map
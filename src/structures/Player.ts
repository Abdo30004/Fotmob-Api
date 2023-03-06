import { Team } from "./Team";
import { ApiPlayer } from "../interfaces/PlayerResult";
import CacheManager from "./CacheManager";

class Player extends CacheManager<Player> {
  public name: string;
  public id: number;
  public country: string;

  constructor(ApiPlayer: ApiPlayer) {
    super();
    this.name = ApiPlayer.name;
    this.id = ApiPlayer.id;
    this.country = ApiPlayer.country;
  }
}

export default Player;
export { Player };

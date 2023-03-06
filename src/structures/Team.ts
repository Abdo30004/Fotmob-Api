import CacheManager from "./CacheManager";
import { Player } from "./Player";
import { ApiTeam } from "../interfaces/TeamResult";

class Team extends CacheManager<Player> {
  public name: string;
  public id: number;
  public country: string;
  public players: Player[];

  constructor(ApiTeam: ApiTeam) {
    super();
    this.name = ApiTeam.name;
    this.id = ApiTeam.id;
    this.country = ApiTeam.country;
    this.players = ApiTeam.squad.map((player) => new Player(player));
  }
}

export default Team;
export { Team };

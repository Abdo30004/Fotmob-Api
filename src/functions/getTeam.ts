import axios from "axios";
import { ApiTeam } from "../interfaces/TeamResult";

/**
 *
 * @typeParam ApiTeam
 */
const getTeam = async (
  teamId: string,
  full: boolean = false
): Promise<ApiTeam> => {
  let { data } = await axios
    .get(`https://www.fotmob.com/api/teams?id=${teamId}`)
    .catch((err) => err.response);

  if (!data.details) throw new Error("Team not found");
  if (full) {
    return data;
  }

  return {
    id: data.details?.id,
    name: data.details?.name || null,
    shortName: data.details?.shortName || null,
    country: data.details?.country || null,
    logo: data.details?.sportsTeamJSONLD?.logo || null,
    coach: data.details?.sportsTeamJSONLD?.coach?.name || null,
    stadium: data.details?.sportsTeamJSONLD?.location?.name || null,
    squad:
      data?.squad
        ?.map((type: any, i: number) => {
          let role = type[0];
          let players = type[1].map((player: any) => {
            return {
              id: player.id,
              name: player.name,
              country: player.cname,
              role: role,
            };
          });
          return players;
        })
        .flat() || null,
  } as ApiTeam;
};

export default getTeam;
export { getTeam };

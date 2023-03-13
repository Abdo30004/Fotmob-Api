import axios from "axios";
import { ApiPlayer } from "../interfaces/PlayerResult";

const getPlayer = async (playerId: string, full: boolean = false) => {
  let { data } = await axios.get(
    `https://www.fotmob.com/api/playerData?id=${playerId}`
  );
  if (!data) {
  
}
  if (full) {
    return data;
  }
  return {
    id: data.id.t,
    name: data.name,
  } as ApiPlayer;
};

export default getPlayer;
export { getPlayer };

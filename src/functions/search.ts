import axios from "axios";
import { ApiPlayer } from "../interfaces/PlayerResult";
import { ApiSearchResult } from "../interfaces/Raw/ApiSearchResult";

interface Options {
  filter?: keyof ["squadMember", "news", "team", "match", "league"];
  language?: string;
}
const getSearchResult = async (search: string, options?: Options) => {
  let url = `https://www.fotmob.com/api/searchData?term=${search}`;
  if (options?.filter) {
    url += `&fetchMore=${options.filter.toString()}`;
  }
  if (options?.language) {
    url += `&userLanguage=${options.language}`;
  }
  let { data } = (await axios.get(url)) as { data: ApiSearchResult };
  return {
    matches: {
      count: data.matches?.datasetLength,
      data: data.matches?.dataset?.map((match) => match),
      
    },
    teams: {
      count: data.teams?.datasetLength,
      data: data.teams?.dataset?.map((team) => team),
    },
    news: {
      count: data.news?.datasetLength,
      data: data.news?.dataset?.map((news) => news),
    },
    squad: {
      count: data.squad?.datasetLength,
      data: data.squad?.dataset?.map((squad) => squad),
    },
    leagues: {
      count: data.leagues?.datasetLength,
      data: data.leagues?.dataset?.map((league) => league),
    },

    
  };
};

export default getSearchResult;
export { getSearchResult };

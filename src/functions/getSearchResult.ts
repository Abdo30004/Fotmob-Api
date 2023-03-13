import axios from "axios";
import { ApiSearchResult } from "../interfaces/Raw/ApiSearchResult";

export interface Options {
  filter?: "squadMember" | "news" | "team" | "match" | "league";
  language?: string;
}
const getSearchResult = async (keyword: string, options?: Options) => {
  let url = `https://www.fotmob.com/api/searchData?term=${keyword}`;
  if (options?.filter) {
    url += `&fetchMore=${options.filter.toString()}`;
  }
  if (options?.language) {
    url += `&userLanguage=${options.language}`;
  }
  let { data } = (await axios.get(url)) as { data: ApiSearchResult };
  if (!data) throw new Error("Data not found");
  return {
    matches: {
      count: data?.matches?.datasetLength ?? 0,
      data: data?.matches?.dataset?.map((match) => match) ?? [],
    },
    teams: {
      count: data?.teams?.datasetLength ?? 0,
      data: data?.teams?.dataset?.map((team) => team) ?? [],
    },
    news: {
      count: data?.news?.datasetLength ?? 0,
      data: data?.news?.dataset?.map((news) => news) ?? [],
    },
    squad: {
      count: data?.squad?.datasetLength ?? 0,
      data: data?.squad?.dataset?.map((squad) => squad) ?? [],
    },
    leagues: {
      count: data?.leagues?.datasetLength ?? 0,
      data: data?.leagues?.dataset?.map((league) => league) ?? [],
    },
  };
};

export default getSearchResult;
export { getSearchResult };

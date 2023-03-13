import { getSearchResult } from "../src/functions/getSearchResult";

const test = async () => {
  const result = await getSearchResult("messi", {
    filter: "squadMember"
  });
  console.log(result);
};

test();

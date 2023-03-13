# **Fotmob-Api Package**

**The package is still in the development process.**


## Api Search Functions

| Function     |Parameters | Description |
| ----------- | ----------- |----------- |
| getTeam (async)     | **teamId** : string, **full** : boolean| get any football team informations using fotmob team id|
| getPlayer (async)| **playerId** : string, full : boolean | get any football player/coach informations using fotmob team id|
| getSearchResult (async)| **keyword** : string, **options** |search in fotmob for teams/players or coaches (squad)/news/matches/leagues|




```ts 
import { getTeam, getPlayer, getSearchResult } from "fotmob-api";

async function test(){
    try{
    let results=await getSearchResult("messi");//searching for a player
    /*

    advanced search
    let results = await getSearchResult("messi", {
    filter: "squadMember"
    });

    */
    console.log(results);

    } catch(err){
        console.log(err);
    }

}
test()

```

**Note: The Fotmob API is public but without any official documentation.**

**Anyone who wants to contribute can open a pull request on GitHub.**
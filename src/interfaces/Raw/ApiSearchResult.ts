 export interface ApiSearchResult {
   matches?: Matches;
   teams?: Teams;
   news?: News;
   squad?: Squad;
   leagues?: Leagues;
 }

 interface Matches {
  datasetLength?: number;
  dataset?: MatchesDataset[];
  haveMore?: boolean;
}
 interface Leagues {
   datasetLength?: number;
   dataset?: LeaguesDataset[];
   haveMore?: boolean;
 }

export interface LeaguesDataset {
  id?: string;
  name?: string;
  countryName?: string;
  countryCode?: string;
}
 interface MatchesDataset {
  pageUrl?: string;
  home?: AwayElement;
  away?: AwayElement;
  status?: Status;
}

 interface AwayElement {
  name?: string;
  id?: string;
}

 interface Status {
  utcTime?: Date;
  started?: boolean;
  cancelled?: boolean;
  finished?: boolean;
}

 interface News {
  dataset?: NewsDataset[];
  datasetLength?: number;
  haveMore?: boolean;
}

 interface NewsDataset {
  imageUrl?: string;
  title?: string;
  sourceStr?: string;
  lead?: string;
  page?: Page;
}

 interface Page {
  url?: string;
}

 interface Squad {
  datasetLength?: number;
  dataset?: SquadDataset[];
  haveMore?: boolean;
}

 interface SquadDataset {
  id?: string;
  name?: string;
  teamName?: string;
}

 interface Teams {
  datasetLength?: number;
  dataset?: AwayElement[];
  haveMore?: boolean;
}

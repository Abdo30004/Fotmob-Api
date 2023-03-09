export interface Matches {
  datasetLength?: number;
  dataset?: MatchesDataset[];
  haveMore?: boolean;
}
export interface Leagues {
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
export interface MatchesDataset {
  pageUrl?: string;
  home?: AwayElement;
  away?: AwayElement;
  status?: Status;
}

export interface AwayElement {
  name?: string;
  id?: string;
}

export interface Status {
  utcTime?: Date;
  started?: boolean;
  cancelled?: boolean;
  finished?: boolean;
}

export interface News {
  dataset?: NewsDataset[];
  datasetLength?: number;
  haveMore?: boolean;
}

export interface NewsDataset {
  imageUrl?: string;
  title?: string;
  sourceStr?: string;
  lead?: string;
  page?: Page;
}

export interface Page {
  url?: string;
}

export interface Squad {
  datasetLength?: number;
  dataset?: SquadDataset[];
  haveMore?: boolean;
}

export interface SquadDataset {
  id?: string;
  name?: string;
  teamName?: string;
}

export interface Teams {
  datasetLength?: number;
  dataset?: AwayElement[];
  haveMore?: boolean;
}

export interface ApiSearchResult {
  matches?: Matches;
  teams?: Teams;
  news?: News;
  squad?: Squad;
  leagues?: Leagues;
}
